'use client';

import '@/app/ui/Styles/CSS/RegistryGalleryComponent.css';
import { useEffect, useState, Suspense, useReducer } from 'react';
import axios from "axios";
import Link from 'next/link';
import Image from 'next/image';
import { Item, Store } from '@/app/lib/definitions';
import Loading from '@/app/(pages)/registry/Loading';

export default function RegistryGallery() {
  const [filterMenuID, setFilterMenuID] = useState ("filterUnclicked");
  const [filterMenuClick, setFilterMenuClicked] = useState (false);
  const [itemClickedID, setItemClickedId] = useState ("itemUnclicked");
  const [itemClicked, setItemClicked] = useState (false);
  const [priceChecked, setPriceChecked] = useState (["", ""]);
  const [storeChecked, setStoreChecked] = useState ("");
  const [statusChecked, setStatusChecked] = useState ("");
  const [load, setLoad] = useState ("unloaded");
  const [, forceRender] = useReducer(x => x + 1, 0);
  const [stocked, setStocked] = useState("inStock")
    // eslint-disable-next-line
  const [pages, setPages] = useState([
    {
      pageNumber: 1
    },
  ])
    // eslint-disable-next-line
  const [pageCount, setPageCount] = useState("1");
    // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [leftOrRight, setLeftOrRight] = useState(
    {
      left: "left",
      right: "right"
    }
  );
  const priceOptions = [
    { label: "$0-49", value: ["0.00", "49.99"] },
    { label: "$50-99", value: ["50.00","99.99"] },
    { label: "$100-149", value: ["100.00", "149.99"] },
    { label: "$150+", value: ["150.00", "999999999.99"] }
  ];
  const [storeOptions, setStoreOptions] = useState<Store[]>([]);
  const statusOptions = [
    { label: "Available", value: "available" },
    { label: "Purchased", value: "purchased" }
  ];

  const [storeItems, setStoreItems] = useState<Item[]>([]);

  const sortFilters = [
    { label: "Featured", value: "feat" },
    { label: "Price high to low", value: "htl" },
    { label: "Price low to high", value: "lth" }
  ]
  // eslint-disable-next-line
  const [filterType, setFilterType] = useState("feat");

/*
  function onFilterChange (value: any) {
    setFilterType(value);
    if (value === "feat") {
      setStoreItems(storeItems.sort((a, b) => a.priority < b.priority ? -1 : 1));
    }
    else if (value === "htl") {
      setStoreItems(storeItems.sort((a, b) => a.productPrice > b.productPrice ? -1.00 : 1.00));
    }
    else if (value === "lth") {
      setStoreItems(storeItems.sort((a, b) => a.productPrice < b.productPrice ? -1.00 : 1.00));
    }
    setLoad("done")
  }


  function onPriceChange (value: any) {
    if (priceChecked[0] === value[0] && priceChecked[1] === value[1]) {
      setPriceChecked(["", ""]);
    }
    else {
      setPriceChecked(value);
    }
  }

  function onStoreChange (value: any) {
    if (storeChecked === value) {
      setStoreChecked("");
    }
    else {
      setStoreChecked(value);
    }
  }

  function onStatusChange (value: any) {
    if (statusChecked === value) {
      setStatusChecked("");
    }
    else {
      setStatusChecked(value);
    }
  }
 */
  function updateProviders (direction: "left" | "right") {
    var newOptions = storeOptions;
    if (direction === "right") {
      newOptions[0].index = storeOptions.length;
      for (let i = 0; i < storeOptions.length; i++) {
        newOptions[i].index = storeOptions[i].index - 1;
      }
      newOptions = newOptions.sort((a, b) => a.index < b.index ? -1 : 1);
      setStoreOptions(newOptions);
    }
    else if (direction === "left") {
      newOptions[newOptions.length - 1].index = -1;
      for (let i = 0; i < storeOptions.length; i++) {
        newOptions[i].index = storeOptions[i].index + 1;
      }
      newOptions = newOptions.sort((a, b) => a.index < b.index ? -1 : 1);
      setStoreOptions(newOptions);
    }
    forceRender()
  }

  function updateItemClicked () {
    if (window.innerWidth <= 768) {
      if (!itemClicked) {
        setItemClickedId ("itemClicked");
      }
      else {
          setItemClickedId ("itemUnclicked");
      }
      setItemClicked (!itemClicked);
    }
  }

  /* // Toggle button/menu
  function updateFilterMenu () {
    if (!filterMenuClick) {
        setFilterMenuID ("filterClicked");
    }
    else {
        setFilterMenuID ("filterUnclicked");
    }
    setFilterMenuClicked (!filterMenuClick);
  } */


  async function markPurchased(id: number) {
    axios.put(`https://weddingbackend.norgaardfamily.com/item/${id}`)
    .then((response) => {
      console.log(response);
      alert("Purchased added successfully!");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      alert("Purchased failed!");
      window.location.reload();
    })
  }

  useEffect(() => {
    let tempItems = [...storeItems]
    axios.get(`https://weddingbackend.norgaardfamily.com/registry`)
  .then(function (response) {
    try {
      const data = response.data
      const len = data.length
      for (let i = 0; i < len; i++) {
        tempItems.push({
          storeName: data[i].storeName,
          productName: data[i].itemName,
          productUrl: data[i].productUrl,
          imageUrl: data[i].imageUrl,
          productPrice: data[i].price,
          qtyNeeded: data[i].stock,
          priority: data[i].priority
        })
      }
    } catch (Err) {
      console.log(response.data);
    }
  })
  .then (function () {
    setLoad("loaded");
  })
  .catch((err) => {
    console.log("Error: " + err)
  })

  let providerItems = [...storeOptions]
    axios.get(`https://weddingbackend.norgaardfamily.com/stores`)
  .then(function (response) {
    try {
      const data = response.data
      const len = data.length
      for (let i = 0; i < len; i++) {
        providerItems.push({
          label: data[i].storeName,
          value: data[i].storeName,
          registryLink: data[i].storeUrl,
          registryImage: data[i].storeImageUrl,
          index: data[i].storeId
        })
      }
    } catch (Err) {
      console.log(response.data);
    }
  })
  .then (function () {
    setLoad("loaded");
  })
  .catch((err) => {
    console.log("Error: " + err)
  })
  if (storeOptions.length === 0) {
    setStoreOptions(providerItems)
  }
  if (storeItems.length === 0) {
    setStoreItems(tempItems)
  }
  }, // eslint-disable-next-line
  [load]);

  return (
      <div className="Container Registry">
        <div className="Container RegistryProviders RegistryProviderMain">
          {
          storeOptions.length > 2 &&
          <button className="Navigate" id="left" onClick={() => updateProviders("left")}>&larr;</button>
          }
          <div className="Container RegistryProviders RegistryProviderInner">
            <h1>Gift Providers</h1>
            <Suspense fallback={<Loading/>}>
              <div className='Container RegistryProviders RegistryProviderList'>
                {storeOptions.map((store: Store, id: number) => (
                  (store.index < 5) &&
                  <Link href={store.registryLink} target='_blank' className="RegistryProviders Box" id={"index"+id} key={id}>
                    <Image className="RegistryProviders Logo" id={store.value.toLowerCase()} src={store.registryImage} alt={store.label + " registry logo"} width={200} height={200} style={{objectFit: 'contain'}}/>
                    <p className="RegistryProviders Button">Shop Registry</p>
                  </Link>
                ))}
              </div>
            </Suspense>
          </div>
          {
          storeOptions.length > 2 &&
            <button className='Navigate' id="right" onClick={() => updateProviders("right")}>&rarr;</button>
          }
        </div>
        <div className='Container RegistryItemList Main'>
          <div id="HeadBox" className='md:flex-row flex-col flex'>
            <div id="HeadBoxText">
              <h1>Our Wish List</h1>
              {/* <button className="RegistryItemList Filters" id={filterMenuID} 
              //onClick={updateFilterMenu}
              >Filters</button> */}
            </div>
            <div className="md:max-w-[50%]" id="addressQCont">
              <p className='text-sm text-center'>Please only click "Mark as Purchased" after you have purchased an item.</p>
              <p className='text-sm text-center'>If you pressed it by accident or need help, please contact Austin or Jess :)</p>
            </div>
            <Link className='md:mr-8' id="addressQCont" href="/faq?question=gifts">
              <p id="addressQuestion">Where do I send all this?</p>
              <p id="clickMeAddress">Click Me</p>
            </Link>
            {/*< div className='Container RegistryItemList Box Sort'>
              <label htmlFor="sort">Sort by</label>
              <select className='RegistryItemList Sort' id="sortselect" name="Sort" 
              //onChange={(e: any) => onFilterChange(e.value)}
              >
                {sortFilters.map((filter, id) => (
                  <option value={filter.value} key={id}>{filter.label}</option>
                ))}
              </select>
            </div> */}
          </div>
          <div className='Container RegistryItemList Inner' id={filterMenuID}>
            {/* <div className='Container RegistryItemList Filters List'>
              <div className="Container RegistryItemList Filters Filter" id="price">
                <h1 className="Filters" id="price">Price</h1>
                {priceOptions.map((option, index) => (
                  <div className="Container Filters CheckRow" id={"priceCheckRow"+index} key={index}>
                    <input checked={priceChecked[0] === option.value[0] && priceChecked[1] === option.value[1]} 
                    //onChange={() => onPriceChange(option.value)} 
                    type='checkbox' name={"price["+index+"]"}/>
                    <p className="Filters CheckRow Label">{option.label}</p>
                  </div>
                ))}
              </div>
              <div className="Container RegistryItemList Filters" id="store">
                <h1 className="Filters" id="store">Store</h1>
                {storeOptions.map((option, index) => (
                  <div className="Container Filters CheckRow" id={"storeCheckRow"+index} key={index}>
                    <input checked={storeChecked === option.value} 
                    //onChange={() => onStoreChange(option.value)} 
                    type='checkbox' name={"store["+index+"]"}/>
                    <p className="Filters CheckRow Label">{option.label}</p>
                  </div>
                ))}
              </div>
              <div className="Container RegistryItemList Filters" id="status">
                <h1 className="Filters" id="status">Status</h1>
                {statusOptions.map((option, index) => (
                  <div className="Container Filters CheckRow" id={"statusCheckRow"+index} key={index}>
                    <input checked={statusChecked === option.value}
                    //onChange={() => onStatusChange(option.value)} 
                    type='checkbox' name={"status["+index+"]"}/>
                    <p className="Filters CheckRow Label">{option.label}</p>
                  </div>
                ))}
              </div>
            </div> */}
            <div className="Container RegistryItemList Items">
            <Suspense fallback={<Loading/>}>
              {storeItems.map((item: Item, id: number) => (
                /*((storeChecked === store.storeName || storeChecked === "") && 
                ((parseFloat(priceChecked[0]) <= store.productPrice && 
                parseFloat(priceChecked[1]) >= store.productPrice) || 
                (store.canAddToStandardCart === true && priceChecked[0] === "" && priceChecked[1] === "")) && 
                ((statusChecked === 'available' && store.qtyNeeded > 0) || 
                (statusChecked === "purchased" && store.qtyNeeded === 0) || 
                (statusChecked === "")) && (store.isOnPage === true)) &&*/
                <button onClick={() => updateItemClicked()} className="Item" id={itemClickedID} key={id}>
                  {item.qtyNeeded > 0 ?
                  <div id="overlayItem"><Link href={item.productUrl} target='_blank' id="shopNow">Shop</Link>
                  {id !== 0 ?
                    <div onClick={async () => await markPurchased(id+1)} id='markPurchased'>Mark Purchased</div> : null
                  }
                  </div> :
                  <div id="overlayItem"><p id='markPurchased'>Already Purchased!</p></div>
                  }
                  <img className='Item Logo' src={item.imageUrl} alt={item.productName}/>
                  <div className="Container Item Text" id={item.storeName}>
                    <h4 className='Item Title'>{item.productName}</h4>
                    <h4 className="Item Price">${item.productPrice.toFixed(2)}</h4>
                  </div>
                </button>
              ))}
            </Suspense>
            </div>
          </div>
          {/*<div className='Container RegistryItemList PageSelect'>
            {pages.map((page, id) => (
              <button 
              onClick={() => toPage(page.pageNumber)} 
              id={currentPage === page.pageNumber ? "SelectedPage" : "Page"} 
              key={id}>
                <p 
                onClick={() => toPage(page.pageNumber)}
                >
                  {page.pageNumber}
                  </p>
              </button>
            ))}
          </div>
          */}
        </div>
      </div>
  );
}
