import './RegistryGalleryComponent.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import downarrow from "../../../arrow-down-3101.png"
import amazonlogo from "../../../amazonlogo.webp"
import venmoqr from "../../../venmoqr.jpg"
import axios from "axios";

function RegistryGallery() {
  const [items, setItems] = useState([]);
  const [filterMenuID, setFilterMenuID] = useState ("filterUnclicked");
  const [filterMenuClick, setFilterMenuClicked] = useState (false);
  const [priceChecked, setPriceChecked] = useState (["", ""]);
  const [storeChecked, setStoreChecked] = useState ("");
  const [statusChecked, setStatusChecked] = useState ("");
  const [load, setLoad] = useState ("unloaded");
  const priceOptions = [
    { label: "$0-49", value: ["0.00", "49.99"] },
    { label: "$50-99", value: ["50.00","99.99"] },
    { label: "$100-149", value: ["100.00", "149.99"] },
    { label: "$150+", value: ["150.00", "999999999.99"] }
  ];
  const storeOptions = [
    { label: "Amazon", value: "amazon" },
    { label: "Serta", value: "Serta" },
    { label: "Ring", value: "Ring" }
  ];
  const statusOptions = [
    { label: "Available", value: "available" },
    { label: "Purchased", value: "purchased" }
  ];
  const quantityNeeded = [
    { label: "serta", value: 1 },
    { label: "ring", value: 1 },
    { label: "amazon", value: 1},
    { label: "venmo", value: 1}
  ];
  const [storeItems, setStoreItems] = useState ([
    { 
      storeName: "Venmo",
      productName: "Newlywed House Funds", 
      productUrl: "/venmo",
      imageUrl: venmoqr,
      productPrice: 5000,
      qtyNeeded: quantityNeeded[0].value,
      priority: 1
    },
    { 
      storeName: "Serta",
      productName: "Serta iComfortECO Foam Mattress", 
      productUrl: "https://www.serta.com/products/icomforteco-foam-mattress?variant=44416523665572&irclickid=1vTVaR1g5xyKWK-Vd7WwnQt3UkCzJVQpMxZYzU0&irgwc=1&utm_campaign=Skimbit%20Ltd.&utm_source=impact&utm_medium=affliate&utm_content=Online%20Tracking%20Link",
      imageUrl: "https://www.serta.com/cdn/shop/files/gzbe2putpha6vcmgtqu8_abf8b5e4-b0c4-44ca-a774-2e2b0380b62d.jpg?v=1697066047&width=2000",
      productPrice: 3099.00,
      qtyNeeded: quantityNeeded[0].value,
      priority: 2
    },
    {
      storeName: "Ring",
      productName: "Ring Wired Doorbell Pro",
      productUrl: "https://ring.com/products/video-doorbell-pro-2",
      imageUrl: "https://images.ctfassets.net/a3peezndovsu/variant-31961428492377/e8d3f08c98ee484eef46c383b85cb785/variant-31961428492377.jpg",
      productPrice: 229.99,
      qtyNeeded: quantityNeeded[1].value,
      priority: 3
    }
  ]);
  const sortFilters = [
    { label: "Featured", value: "feat" },
    { label: "Price high to low", value: "htl" },
    { label: "Price low to high", value: "lth" }
  ]
  // eslint-disable-next-line
  const [filterType, setFilterType] = useState("feat");

  function onFilterChange (value) {
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
  }


  function onPriceChange (value) {
    if (priceChecked[0] === value[0] && priceChecked[1] === value[1]) {
      setPriceChecked(["", ""]);
    }
    else {
      setPriceChecked(value);
    }
  }

  function onStoreChange (value) {
    if (storeChecked === value) {
      setStoreChecked("");
    }
    else {
      setStoreChecked(value);
    }
  }

  function onStatusChange (value) {
    if (statusChecked === value) {
      setStatusChecked("");
    }
    else {
      setStatusChecked(value);
    }
  }


  // Toggle button/menu
  function updateFilterMenu () {
    if (!filterMenuClick) {
        setFilterMenuID ("filterClicked");
    }
    else {
        setFilterMenuID ("filterUnclicked");
    }
    setFilterMenuClicked (!filterMenuClick);
  }
 
  useEffect(() => {
    axios.get('https://weddingapi.norgaardfamily.com/https://www.amazon.com/wedding/items/2PMC8XDS4JY6F?page=1&filter=noFilter&sort=priority&direction=descending&prime=false', {id: 1})
  .then(function (response) {
    let maxItems = response.data.result.filteredItemTotal;
    for (let i = 0; i < maxItems; i++) {
      setItems(response.data.result.minimalRegistryItems); 
    }
  }).then (function (value) {
    // eslint-disable-next-line
    items.map((item, key) => {
      let prio = key+4;
      if (item.mustHave === true) {
        prio = 4;
      }
      storeItems.push({
        storeName: "amazon", 
        productName: item.productTitle, 
        productUrl: "https://www.amazon.com" + item.productUrl, 
        imageUrl: item.imageUrl, 
        productPrice: item.itemPrice.amount, 
        qtyNeeded: item.qtyNeeded,
        priority: prio
      })
    })
    setLoad("loaded")})
  }, // eslint-disable-next-line
  [load]);

  console.log(storeItems);

  return (
    <div className="RegistryGallery" id="content">
      
      <div className="MainContainer" id="RegistryGalleryMainContainer">
        <div className="RegistryProviderContainer">
          <h1>Gift Providers</h1>
          <div className='RegistryProviders'>
            <Link to="https://www.amazon.com/wedding/a/registry/2PMC8XDS4JY6F?tag=wedch-995-20" target='_blank' className="providerbox">
              <img className="providerlogo" id="amazonlogo" src={amazonlogo} alt="amazon registry logo"/>
              <Link to="https://www.amazon.com/wedding/a/registry/2PMC8XDS4JY6F?tag=wedch-995-20" target='_blank' className="shopproviderbutton">Shop Registry</Link>
            </Link>
            <Link to="https://www.serta.com/products/icomforteco-foam-mattress?variant=44416523665572&irclickid=1vTVaR1g5xyKWK-Vd7WwnQt3UkCzJVQpMxZYzU0&irgwc=1&utm_campaign=Skimbit%20Ltd.&utm_source=impact&utm_medium=affliate&utm_content=Online%20Tracking%20Link" target="_blank" className="providerbox">
              <img className="providerlogo" id="sertalogo" src="https://ringofire.com/wp-content/uploads/2020/10/Serta_Logo.png" alt="serta logo"/>
              <Link to="https://www.serta.com/products/icomforteco-foam-mattress?variant=44416523665572&irclickid=1vTVaR1g5xyKWK-Vd7WwnQt3UkCzJVQpMxZYzU0&irgwc=1&utm_campaign=Skimbit%20Ltd.&utm_source=impact&utm_medium=affliate&utm_content=Online%20Tracking%20Link" target='_blank' className="shopproviderbutton">Shop Registry</Link>
            </Link>
            <Link to="https://ring.com/products/video-doorbell-pro-2" target="_blank" className="providerbox">
              <img className='providerlogo' id="ringlogo" src="https://download.logo.wine/logo/Ring_Inc./Ring_Inc.-Logo.wine.png" alt="ring logo"/>
              <Link to="https://ring.com/products/video-doorbell-pro-2" target='_blank' className="shopproviderbutton">Shop Registry</Link>
            </Link>
          </div>
        </div>
        <div className='RegistryWishlistContainer'>
          <div className='RegistryWishlistHeader'>
            <div className='RegistryWishlistHeaderText'>
              <h1>Our Wish List</h1>
              <button className="FilterButton" id={filterMenuID} onClick={updateFilterMenu}>Filters</button>
            </div>
            <div className='RegistrySortBox'>
              <label for="sort">Sort by</label>
              <select name="sort" id="sort" onChange={() => onFilterChange(document.querySelector('#sort').value)}>
                {sortFilters.map((filter, key) => (
                  <option value={filter.value}>{filter.label}</option>
                ))}
              </select>
              <img src={downarrow} alt="arrowdown"/>
            </div>
          </div>
          <div className='RegistryWishlistItemsContainer' id={filterMenuID}>
            <div className='RegistryWishlistFilters'>
              <div id="pricefilter">
                <h1 id="pricefilterheader">Price</h1>
                {priceOptions.map((option, key) => (
                  <div className="CheckRow" id={"priceCheckRow"+key}>
                    <input checked={priceChecked[0] === option.value[0] && priceChecked[1] === option.value[1]} onChange={() => onPriceChange(option.value)} type='checkbox' name={"price["+key+"]"}/>
                    <p id="filterlabel">{option.label}</p>
                  </div>
                ))}
              </div>
              <div id="storefilter">
                <h1 id="storefilterheader">Store</h1>
                {storeOptions.map((option, key) => (
                  <div className="CheckRow" id={"storeCheckRow"+key}>
                    <input checked={storeChecked === option.value} onChange={() => onStoreChange(option.value)} type='checkbox' name={"store["+key+"]"}/>
                    <p id="filterlabel">{option.label}</p>
                  </div>
                ))}
              </div>
              <div id="statusfilter">
                <h1 id="statusfilterheader">Status</h1>
                {statusOptions.map((option, key) => (
                  <div className="CheckRow" id={"statusCheckRow"+key}>
                    <input checked={statusChecked === option.value} onChange={() => onStatusChange(option.value)} type='checkbox' name={"status["+key+"]"}/>
                    <p id="filterlabel">{option.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="RegistryWishlistItems" id="registryItems">
              {storeItems.map((store, key) => (
                ((storeChecked === store.storeName || storeChecked === "") && ((parseFloat(priceChecked[0]) <= store.productPrice && parseFloat(priceChecked[1]) >= store.productPrice) || (priceChecked[0] === "" && priceChecked[1] === "")) && ((statusChecked === 'available' && store.qtyNeeded > 0) || (statusChecked === "purchased" && store.qtyNeeded === 0) || (statusChecked === ""))) &&
                <Link to={store.productUrl} target='_blank' id="item">
                  <img src={store.imageUrl} alt={store.productName}/>
                  <div className="ItemTextContainer" id={store.storeName+"ItemText"}>
                    <h4 id="itemtitle">{store.productName}</h4>
                    <h4 id="itemprice">${store.productPrice.toFixed(2)}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistryGallery;
