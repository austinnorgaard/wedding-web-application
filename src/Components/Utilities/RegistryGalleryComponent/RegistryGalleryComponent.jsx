import './RegistryGalleryComponent.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import downarrow from "../../../arrow-down-3101.png"
import amazonlogo from "../../../amazonlogo.webp"
import axios from "axios";

function RegistryGallery() {
  const [items, setItems] = useState([]);
  const [filterMenuID, setFilterMenuID] = useState ("filterUnclicked");
  const [filterMenuClick, setFilterMenuClicked] = useState (false);
  const [priceChecked, setPriceChecked] = useState (["", ""]);
  const [storeChecked, setStoreChecked] = useState ("");
  const [statusChecked, setStatusChecked] = useState ("");
  const priceOptions = [
    { label: "$0-49", value: ["0.00", "49.99"] },
    { label: "$50-99", value: ["50.00","99.99"] },
    { label: "$100-149", value: ["100.00", "149.99"] },
    { label: "$150+", value: ["150.00", "999999999.99"] }
  ];
  const storeOptions = [
    { label: "Amazon", value: "amazon" },
    { label: "Serta", value: "serta" },
    { label: "Ring", value: "ring" }
  ];
  const statusOptions = [
    { label: "Available", value: "available" },
    { label: "Purchased", value: "purchased" }
  ];
  const quantityNeeded = [
    { label: "serta", value: 1 },
    { label: "ring", value: 1 },
  ];


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

  function priceConversion (price) {
    if (price !== null) {
      let priceConversion = "";
      priceConversion = price;
      priceConversion = priceConversion.replace("$", ""); 
      priceConversion = priceConversion.replace(",", ""); 
      priceConversion = parseFloat(priceConversion); 
      console.log(priceConversion);
      return priceConversion;
    }
  }
 
  useEffect(() => {
    axios.get('https://weddingapi.norgaardfamily.com/https://www.amazon.com/wedding/items/2PMC8XDS4JY6F?page=1&filter=noFilter&sort=priority&direction=descending&prime=false', {id: 1})
  .then(function (response) {
    let maxItems = response.data.result.filteredItemTotal;
    for (let i = 0; i < maxItems; i++) {
      setItems(response.data.result.minimalRegistryItems);
    }
  });
  }, []);

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
              <select name="sort" id="sort">
                <option value="featured">Featured</option>
                <option value="pricehighlow">Price high to low</option>
                <option value="pricelowhigh">Price low to high</option>
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
              {((storeChecked === "serta" || storeChecked === "") && ((parseFloat(priceChecked[0]) <= 3099 && parseFloat(priceChecked[1]) >= 3099) || (priceChecked[0] === "" && priceChecked[1] === "")) && ((statusChecked === 'available' && quantityNeeded[0].value > 0) || (statusChecked === "purchased" && quantityNeeded[0].value === 0) || (statusChecked === ""))) &&
              <Link to="https://www.serta.com/products/icomforteco-foam-mattress?variant=44416523665572&irclickid=1vTVaR1g5xyKWK-Vd7WwnQt3UkCzJVQpMxZYzU0&irgwc=1&utm_campaign=Skimbit%20Ltd.&utm_source=impact&utm_medium=affliate&utm_content=Online%20Tracking%20Link" target='_blank' id="item">
                <img src="https://www.serta.com/cdn/shop/files/gzbe2putpha6vcmgtqu8_abf8b5e4-b0c4-44ca-a774-2e2b0380b62d.jpg?v=1697066047&width=2000" alt="serta bed"/>
                <div className="ItemTextContainer" id="sertaItemText">
                  <h4 id="itemtitle">Serta iComfortECO Foam Mattress</h4>
                  <h4 id="itemprice">$3099.00</h4>
                </div>
              </Link>
              }
              {((storeChecked === "ring" || storeChecked === "") && ((parseFloat(priceChecked[0]) <= 229.99 && parseFloat(priceChecked[1]) >= 229.99) || (priceChecked[0] === "" && priceChecked[1] === "")) && ((statusChecked === 'available' && quantityNeeded[1].value > 0) || (statusChecked === "purchased" && quantityNeeded[1].value === 0) || (statusChecked === ""))) &&
              <Link to="https://ring.com/products/video-doorbell-pro-2" target='_blank' id="item">
                <img src="https://images.ctfassets.net/a3peezndovsu/variant-31961428492377/e8d3f08c98ee484eef46c383b85cb785/variant-31961428492377.jpg" alt="Ring Camera"/>
                <div className="ItemTextContainer" id="ringItemText">
                  <h4 id="itemtitle">Ring Wired Doorbell Pro</h4>
                  <h4 id="itemprice">$229.99</h4>
                </div>
              </Link>
              }
              {items.map((item, key) => (
                ((storeChecked === "amazon" || storeChecked === "") && ((parseFloat(priceChecked[0]) <= priceConversion(item.itemPrice.displayString) && parseFloat(priceChecked[1]) >= priceConversion(item.itemPrice.displayString)) || (priceChecked[0] === "" && priceChecked[1] === "")) && ((statusChecked === 'available' && item.qtyNeeded > 0) || (statusChecked === "purchased" && item.qtyNeeded === 0) || (statusChecked === ""))) &&
                <Link to={"https://www.amazon.com" + item.productUrl} target='_blank' id="item" index={key}>
                  <img src={item.imageUrl} alt={item.productTitle}/>
                  <div className="ItemTextContainer" id="amazonItemText">
                    <h4 id="itemtitle">{item.productTitle}</h4>
                    <h4 id="itemprice">{item.itemPrice.displayString}</h4>
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
