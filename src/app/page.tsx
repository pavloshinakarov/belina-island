"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Link from "next/link";
import toast from 'react-hot-toast';
import { toastStyles } from '../utils/styles';

import {
  Navbar,
  CopyIcon,
  Decimal,
  TradingViewWidget,
  Loader,
} from "../components";

export default function Home() {
  const [dataNonkyc, setDataNonkyc] = useState<any>();
  const [dataCoingecko, setDataCoingecko] = useState<any>();
  const [dataNintondo, setDataNintondo] = useState<any>();
  const [height, setHeight] = useState<any>();
  const [txs, setTxs] = useState<any>();
  const [blocks, setBlocks] = useState<any>();
  const [images, setImages] = useState<any>();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [addedBelinals, setAddedBelinals] = useState(new Set());
  const [calledWallets, setCalledWallets] = useState(new Set());

  useEffect(() => {

    if (txs && !hasLoaded){
      const loadTransactions = async () => {
        await loadTx();
      };
    
      loadTransactions();
      setHasLoaded(true);
    }


  }, [txs, hasLoaded]);


  useEffect(() => {
    const handleScroll = async (e: Event) => {
      const target = e.target as Document;
      if (target) {
        let { clientHeight, scrollHeight, scrollTop } = target.documentElement;
        if (clientHeight + scrollTop + 1 >= ((scrollHeight) * 75) / 100) {
          const container = document.querySelector(".image-container");
          if (container) {
            await loadTx();                    
          }
        }

        //imageHoverScroll();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [txs]);


  function imageHoverScroll(){
      const container = document.querySelector(".image-container");
      if (container){
        const images = container.querySelectorAll("img");
        let mostVisibleImage = null;
        let maxVisibleArea = 0;

        images.forEach((image) => {
          const rect = image.getBoundingClientRect();
          const visibleHeight = Math.min(
            rect.bottom, 
            window.innerHeight
          ) - Math.max(rect.top, 0);

          const visibleWidth = Math.min(
            rect.right,
            window.innerWidth
          ) - Math.max(rect.left, 0);

          const visibleArea = visibleHeight > 0 && visibleWidth > 0 
                              ? visibleHeight * visibleWidth 
                              : 0;

          if (visibleArea > maxVisibleArea) {
            mostVisibleImage = image;
            maxVisibleArea = visibleArea;
          }
        });

        images.forEach((img) => img.classList.remove("image-hover"));
        if (mostVisibleImage) {
          (mostVisibleImage as HTMLElement).classList.add("image-hover");
        }
      }
  }

  const [averageBlockTime, setAverageBlockTime] = useState<any>("");
  const fetchBlocks = async (height?: number) => {
    const url = height
      ? `https://api.nintondo.io/api/blocks/${height}`
      : "https://api.nintondo.io/api/blocks";
    const response = await fetch(url);
    const result = await response.json();
    return result;
  };

  const GetBlocksForAverageTime = async () => {
    let blocksForAverageTime: any[] = [];
    let result = await fetchBlocks();

    blocksForAverageTime.push(...result);

    for (let i = 0; i < 9; i++) {
      const lastHeight = result[result.length - 1].height - 1;
      result = await fetchBlocks(lastHeight);
      blocksForAverageTime.push(...result);
    }
    GetAverageBlockTime(blocksForAverageTime);
  };

  const compareTimestamps = (
    timestamp1: number,
    timestamp2: number
  ): number => {
    const differenceInSeconds = Math.abs(timestamp2 - timestamp1);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    return differenceInMinutes;
  };

  const GetAverageBlockTime = (dat: any) => {
    let totalDifference = 0;
    let count = 1;

    dat.forEach((block: any, index: number) => {
      if (index > 0) {
        totalDifference += compareTimestamps(
          dat[index - 1].timestamp,
          block.timestamp
        );
        count++;
      }
    });
    setAverageBlockTime((totalDifference / count).toFixed(2));
  };

  const GetRecentTxs = async () => {
    let loader = document.getElementById("loader");
    if (loader){
      loader.style.display = "flex";
    }

    let auth = [];
    let result = await fetch("https://api.nintondo.io/api/address/BEGJMVqLYRJkGwvwmsZDDjERpzxGqdyzXT/utxo")
      .then((res) => res.json())
      .then((result) => {
        return result;
      });

    if (loader){
      loader.style.display = "none";
    }

    setTxs(result);  
     
  };

  const GetBlocks = async () => {
    await fetch("https://api.nintondo.io/api/blocks")
      .then((res) => res.json())
      .then(async (result) => {
        setBlocks(result);
      });
  };

  const GetHeight = async () => {
    await fetch("https://api.nintondo.io/api/blocks/tip/height")
      .then((res) => res.json())
      .then(async (result) => {
        setHeight(result);
      });
  };

  const GetNintondoData = async () => {
    await fetch("https://api.nintondo.io/api/stats/bells")
      .then((res) => res.json())
      .then((result) => {
        setDataNintondo(result);
      });
  };

  const GetCoingeckoData = async () => {
    await fetch("https://api.coingecko.com/api/v3/coins/bellscoin")
      .then((res) => res.json())
      .then((result) => {
        setDataCoingecko(result);
      });
  };

  const GetNonkycData = async () => {
    await fetch("https://api.nonkyc.io/api/v2/ticker/BEL_USDT")
      .then((res) => res.json())
      .then((result) => {
        setDataNonkyc(result);
      });
  };

  useEffect(() => {
    //GetCoingeckoData();
    GetNonkycData();
    GetNintondoData();
    GetHeight();
    GetRecentTxs();
    GetBlocks();
    GetBlocksForAverageTime();

    let closeBtn = document.getElementById("viewImageCloseBtn");
    if (closeBtn){
      closeBtn.addEventListener('click',function(){
        let viewImage = document.querySelector(".view-image");
        if (viewImage && viewImage instanceof HTMLElement){
          viewImage.style.display = "none";
        }
      });
    }

  }, []);

  async function getImage(id: any, value: any){
      let res = await fetch("https://content.nintondo.io/api/pub/content/" + id);
      let url = res.url;
      let img = document.createElement("img");
      img.src = url;

      let imgBoxLink = document.createElement("a");
      imgBoxLink.href = 'https://nintondo.io/belinals/' + id;
      imgBoxLink.target = '_blank';

      let imgBox = document.createElement("div");
      imgBox.classList.add("img-box");
      imgBox.appendChild(img);

      let imgInfo = document.createElement("div");
      imgInfo.classList.add("img-box-info");

      let imgInfoDonation = document.createElement("div");
      imgInfoDonation.innerHTML = (value / 100000000).toFixed(2).toString() + " bels";
      imgInfo.appendChild(imgInfoDonation);

      let imgInfoAddress = document.createElement("div");
      const formattedString = `${id.slice(0, 4)}...${id.slice(-4)}`;
      imgInfoAddress.innerHTML = formattedString;
      imgInfo.appendChild(imgInfoAddress);

      imgBox.appendChild(imgInfo);

      let imageContainer = document.querySelector(".image-container");
      if (imageContainer){
        imgBoxLink.appendChild(imgBox);
        imageContainer.appendChild(imgBoxLink);

        /*img.addEventListener("click",function(e){
          if (e.target){
            let viewImage = document.querySelector(".view-image");
            if (viewImage && viewImage instanceof HTMLElement){
              viewImage.style.display = "grid";

              let fullImage = document.querySelector(".view-image img");
              if (fullImage && fullImage instanceof HTMLImageElement && e.target instanceof HTMLImageElement){
                fullImage.src = e.target.src;
              }

              let donation = document.querySelector(".view-image .donation");
              if (donation && donation instanceof HTMLElement){
                donation.innerText = (value / 100000000).toString();
              }

              let address = document.querySelector(".view-image .address");
              const formattedString = `${id.slice(0, 4)}...${id.slice(-4)}`;
              if (address && address instanceof HTMLElement){
                address.innerHTML = '<a href="https://nintondo.io/belinals/' + id + '" target="_blank">' + formattedString + '</a>';
              }
            }
          }
        })*/
      }
  }

  async function loadBelinalsPage(wallet:any, page:any){
    let response = await fetch("https://content.nintondo.io/api/pub/search?page_size=60&page=" + page + "&account=" + wallet);    
    let result = await response.json();

    const allowedTypes = ['PNG', 'SVG', 'GIF', 'JPEG', 'JPG'];
    
    const filteredFiles = result.inscriptions.filter((r:any) =>
      allowedTypes.includes(r.file_type)
    );

    if (filteredFiles.length > 0){
      return filteredFiles[filteredFiles.length - 1];
    }

    return null;
  }

  async function loadBelinal(wallet:any){
    if (!wallet) {
      //console.log("b");
      return;
    }
    if (calledWallets.has(wallet)) {
      return null;
    }
    calledWallets.add(wallet);
    setCalledWallets(calledWallets);

    const allowedTypes = ['PNG', 'SVG', 'GIF', 'JPEG', 'JPG'];

    let page = 1;
    let response = await fetch("https://content.nintondo.io/api/pub/search?page_size=60&page=" + page + "&account=" + wallet);
    let result = await response.json();
    let belinal = null;

    if (result.pages > 1){
      page = result.pages;
      if (page > 10){
        //console.log("more than 10 pages... ignore wallet")
        return null;
      }
      belinal = await loadBelinalsPage(wallet, page);
    }else{
      const allowedTypes = ['PNG', 'SVG', 'GIF', 'JPEG', 'JPG'];

      const filteredFiles = result.inscriptions.filter((r:any) =>
        allowedTypes.includes(r.file_type)
      );

      if (filteredFiles.length > 0){
        belinal = filteredFiles[filteredFiles.length - 1];
      }else{
        belinal = null;
      }      
    }
    
    while (belinal == null && page > 1){
      //console.log("no belinals, try page: " + page);
      belinal = await loadBelinalsPage(wallet, page);
      page = page - 1;
    }

    return belinal;

  }

  const calledTx: Set<number> = new Set();

  async function loadTx(){
    if (!txs) {
      return;
    }
    const container = document.querySelector(".image-container");
    if (!container) return;
    
    let lastTx = 1;
    if (calledTx.size > 0){
      lastTx = Array.from(calledTx)[calledTx.size - 1];
      lastTx = lastTx + 1;
    }

    calledTx.add(lastTx);

    if (lastTx + 1 > txs.length){
      //no more elements
    }else{

      let tx = txs[lastTx];
      let loader = document.getElementById("loader");
      if (loader){
        loader.style.display = "flex";
      }

      const response = await fetch("https://api.nintondo.io/api/tx/" + tx.txid);
      const result = await response.json();


      let wallet = result.vin[result.vin.length-1].prevout.scriptpubkey_address;
      let value = result.vin[result.vin.length-1].prevout.value;
      //console.log("Wallet:" + wallet);
      let belinal = await loadBelinal(result.vin[result.vin.length-1].prevout.scriptpubkey_address);
      if (belinal){
        //console.log("Belinal FOUND: " + belinal.id);
        //console.log(belinal);

        if (addedBelinals.has(belinal.id)) {
          await loadTx();
        }else{
          addedBelinals.add(belinal.id);
          setAddedBelinals(addedBelinals);
          await getImage(belinal.id, value);
          if (addedBelinals.size < 12){
            await loadTx();
          }        
        }

      }else{
        //console.log("not");
        await loadTx();        
      }
    }

    if (loader){
      loader.style.display = "none";
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <video autoPlay muted loop id="background-video">
        <source src="video/pexels_01.mp4" type="video/mp4" />
      </video>
        
      <div className="view-image">
          <div>
            <div className="objectFit">
              <img src="https://images.unsplash.com/photo-1668954206766-404e981f57f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60." alt=""/>
            </div>
            <div className="belinal-description">
                <div>Donated <span className="donation"></span> BELS</div>
                <div>Address <span className="address"></span></div>
            </div>
          </div>

          <span id="viewImageCloseBtn">X</span>
      </div>

       <div id="parent-image-container">
          <div className="image-container"></div>
      </div>
      <Loader />
      
    </div>
  );
}
