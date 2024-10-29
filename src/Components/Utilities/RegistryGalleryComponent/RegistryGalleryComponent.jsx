import '../../../Styles/CSS/RegistryGalleryComponent.css';
import { Link } from 'react-router-dom';
import { useEffect, useState, React } from 'react';
import downarrow from "../../../Resources/Photos/arrow-down-3101.png"
import amazonlogo from "../../../Resources/Photos/amazonlogo.webp"
import venmoqr from "../../../Resources/Photos/venmoqr.jpg"
import axios from "axios";

function RegistryGallery() {
  const [items, setItems] = useState([]);
  const [filterMenuID, setFilterMenuID] = useState ("filterUnclicked");
  const [filterMenuClick, setFilterMenuClicked] = useState (false);
  const [priceChecked, setPriceChecked] = useState (["", ""]);
  const [storeChecked, setStoreChecked] = useState ("");
  const [statusChecked, setStatusChecked] = useState ("");
  const [load, setLoad] = useState ("unloaded");
  const [, forceRender] = useState(undefined);
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
    { left: "left",
      right: "right"
    }
  );
  const priceOptions = [
    { label: "$0-49", value: ["0.00", "49.99"] },
    { label: "$50-99", value: ["50.00","99.99"] },
    { label: "$100-149", value: ["100.00", "149.99"] },
    { label: "$150+", value: ["150.00", "999999999.99"] }
  ];
  const [storeOptions, setStoreOptions] = useState([
    { 
      label: "Venmo", 
      value: "Venmo",
      registryLink: "/venmo",
      registryImage: venmoqr,
      index: 0
    },
    { 
      label: "Amazon", 
      value: "amazon",
      registryLink: "https://www.amazon.com/wedding/a/registry/2PMC8XDS4JY6F?tag=wedch-995-20",
      registryImage: amazonlogo,
      index: 1
    },
    { 
      label: "Serta", 
      value: "Serta",
      registryLink: "https://www.serta.com/products/icomforteco-foam-mattress?variant=44416523665572&irclickid=1vTVaR1g5xyKWK-Vd7WwnQt3UkCzJVQpMxZYzU0&irgwc=1&utm_campaign=Skimbit%20Ltd.&utm_source=impact&utm_medium=affliate&utm_content=Online%20Tracking%20Link",
      registryImage: "https://ringofire.com/wp-content/uploads/2020/10/Serta_Logo.png",
      index: 2
    },
    { 
      label: "Ring", 
      value: "Ring",
      registryLink: "https://ring.com/products/video-doorbell-pro-2",
      registryImage: "https://download.logo.wine/logo/Ring_Inc./Ring_Inc.-Logo.wine.png",
      index: 3
    }
  ]);
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
      productPrice: parseFloat(5000.00),
      qtyNeeded: quantityNeeded[0].value,
      priority: 1,
      canAddToStandardCart: true,
      isOnPage: true
    },
    { 
      storeName: "Serta",
      productName: "Serta iComfortECO Foam Mattress", 
      productUrl: "https://www.serta.com/products/icomforteco-foam-mattress?variant=44416523534500",
      imageUrl: "https://www.serta.com/cdn/shop/files/gzbe2putpha6vcmgtqu8_abf8b5e4-b0c4-44ca-a774-2e2b0380b62d.jpg?v=1697066047&width=2000",
      productPrice: parseFloat(2499.00),
      qtyNeeded: quantityNeeded[0].value,
      priority: 2,
      canAddToStandardCart: true,
      isOnPage: true
    },
    {
      storeName: "Ring",
      productName: "Ring Wired Doorbell Pro",
      productUrl: "https://ring.com/products/video-doorbell-pro-2",
      imageUrl: "https://images.ctfassets.net/a3peezndovsu/variant-31961428492377/e8d3f08c98ee484eef46c383b85cb785/variant-31961428492377.jpg",
      productPrice: parseFloat(229.99),
      qtyNeeded: quantityNeeded[1].value,
      priority: 3,
      canAddToStandardCart: true,
      isOnPage: true
    }
  ]);
  const sortFilters = [
    { label: "Featured", value: "feat" },
    { label: "Price high to low", value: "htl" },
    { label: "Price low to high", value: "lth" }
  ]
  // eslint-disable-next-line
  const [filterType, setFilterType] = useState("feat");
  const [width, setWidth] =  useState(window.innerWidth);

  function toPage(pageNumber) {
    setCurrentPage(pageNumber);
    if (pageNumber === 1) {
      for (let i = 0; i < storeItems.length; i++) {
        if (i < 12) {
          storeItems.at(i).isOnPage = true
        }
        else {
          storeItems.at(i).isOnPage = false
        }
      }
    }
    else {
      let end = pageNumber * 12;
      if (storeItems.length - 1 < end) {
        end = storeItems.length - 1
      }
      for (let i = 0; i < storeItems.length; i++) {
        if (i < (pageNumber-1) * 12 || i > end) {
          storeItems.at(i).isOnPage = false
        }
        else {
          storeItems.at(i).isOnPage = true
        }
      }
    }
    setStoreItems(storeItems)
    forceRender((prev) => !prev);
  }

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
    toPage(1);
  }


  function onPriceChange (value) {
    if (priceChecked[0] === value[0] && priceChecked[1] === value[1]) {
      setPriceChecked(["", ""]);
    }
    else {
      setPriceChecked(value);
    }
    toPage(1);
  }

  function onStoreChange (value) {
    if (storeChecked === value) {
      setStoreChecked("");
    }
    else {
      setStoreChecked(value);
    }
    toPage(1);
  }

  function onStatusChange (value) {
    if (statusChecked === value) {
      setStatusChecked("");
    }
    else {
      setStatusChecked(value);
    }
    toPage(1);
  }

  function setNewWidth () {
    setWidth(window.innerWidth);
  }

  window.onresize = () => setNewWidth ();

  function updateProviders (direction) {
    if (direction === "right") {
      let newOptions = storeOptions;
      newOptions[0].index = storeOptions.length;
      for (let i = 0; i < storeOptions.length; i++) {
        newOptions[i].index = storeOptions[i].index - 1;
      }
      newOptions = newOptions.sort((a, b) => a.index < b.index ? -1 : 1);
      setStoreOptions(newOptions);
      forceRender((prev) => !prev);
    }
    else if (direction === "left") {
      let newOptions = storeOptions;
      newOptions[newOptions.length - 1].index = -1;
      for (let i = 0; i < storeOptions.length; i++) {
        newOptions[i].index = storeOptions[i].index + 1;
      }
      newOptions = newOptions.sort((a, b) => a.index < b.index ? -1 : 1);
      setStoreOptions(newOptions);
      forceRender((prev) => !prev);
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
    axios.get('http://localhost:9965/https://www.amazon.com/wedding/items/2PMC8XDS4JY6F?page=1&filter=noFilter&sort=priority&direction=descending&prime=false', {
      
    })
  .then(function (response) {
    try {
      let maxItems = response.data.result.filteredItemTotal;
      for (let i = 0; i < maxItems; i++) {
        setItems(response.data.result.minimalRegistryItems); 
      }
    } catch (Err) {
      console.log(response.data);
    }
  }).then (function () {
    // eslint-disable-next-line
    items.map((item, key) => {
      let prio = key+4;
      if (item.mustHave === true) {
        prio = 4;
      }
      let price = parseFloat(item.itemPrice.amount)
      storeItems.push({
        storeName: "amazon", 
        productName: item.productTitle,
        productUrl: "https://www.amazon.com" + item.productUrl, 
        imageUrl: item.imageUrl, 
        productPrice: price, 
        qtyNeeded: item.qtyNeeded,
        priority: prio,
        canAddToStandardCart: item.canAddToStandardCart,
        isOnPage: ((key < 12) ? true : false)
      })
    })
    setLoad("loaded")
    setPageCount(storeItems.length / 12)
    for (let i = 1; i < storeItems.length / 12; i++) {
      pages.push({
        pageNumber: i+1
      })
    }})
  }, // eslint-disable-next-line
  [load]);

  console.log(storeItems)

  return (
    <div className="MainContainer Registry" id="content">
      <div className="Container Registry">
        <div className="Container RegistryProviders RegistryProviderMain">
          {
          // eslint-disable-next-line
          storeOptions.length > 5 || (width <= 768 && storeOptions.length > 3) &&
          <button className="Navigate" id="left" onClick={() => updateProviders(leftOrRight.left)}>&larr;</button>
          }
          <div className="Container RegistryProviders RegistryProviderInner">
            <h1>Gift Providers</h1>
            <div className='Container RegistryProviders RegistryProviderList'>
              {storeOptions.map((store, id) => (
                (store.index < 5) &&
                <Link to={store.registryLink} target='_blank' className="RegistryProviders Box" id={"index"+store.index} key={id}>
                  <img className="RegistryProviders Logo" id={store.value.toLowerCase()} src={store.registryImage} alt={store.label + " registry logo"}/>
                  <Link to={store.registryLink} target='_blank' className="RegistryProviders Button">Shop Registry</Link>
                </Link>
              ))}
            </div>
          </div>
          {
          // eslint-disable-next-line
          storeOptions.length > 4 || (width <= 768 && storeOptions.length > 3) &&
            <button className='Navigate' id="right" onClick={() => updateProviders(leftOrRight.right)}>&rarr;</button>
          }
        </div>
        <div className='Container RegistryItemList Main'>
          <div id="HeadBox">
            <div id="HeadBoxText">
              <h1>Our Wish List</h1>
              <button className="RegistryItemList Filters" id={filterMenuID} onClick={updateFilterMenu}>Filters</button>
            </div>
            <Link id="addressQCont" to="/faq">
              <Link id="addressQuestion" to="/faq">Where do I send all this?</Link>
              <p id="clickMeAddress">Click Me</p>
            </Link>
            <div className='Container RegistryItemList Box Sort'>
              <label htmlFor="sort">Sort by</label>
              <select className='RegistryItemList Sort' id="sortselect" name="Sort" onChange={() => onFilterChange(document.querySelector('#sortselect').value)}>
                {sortFilters.map((filter, id) => (
                  <option value={filter.value} key={id}>{filter.label}</option>
                ))}
              </select>
              <img src={downarrow} alt="arrowdown"/>
            </div>
          </div>
          <div className='Container RegistryItemList Inner' id={filterMenuID}>
            <div className='Container RegistryItemList Filters List'>
              <div className="Container RegistryItemList Filters Filter" id="price">
                <h1 className="Filters" id="price">Price</h1>
                {priceOptions.map((option, index) => (
                  <div className="Container Filters CheckRow" id={"priceCheckRow"+index} key={index}>
                    <input checked={priceChecked[0] === option.value[0] && priceChecked[1] === option.value[1]} onChange={() => onPriceChange(option.value)} type='checkbox' name={"price["+index+"]"}/>
                    <p className="Filters CheckRow Label">{option.label}</p>
                  </div>
                ))}
              </div>
              <div className="Container RegistryItemList Filters" id="store">
                <h1 className="Filters" id="store">Store</h1>
                {storeOptions.map((option, index) => (
                  <div className="Container Filters CheckRow" id={"storeCheckRow"+index} key={index}>
                    <input checked={storeChecked === option.value} onChange={() => onStoreChange(option.value)} type='checkbox' name={"store["+index+"]"}/>
                    <p className="Filters CheckRow Label">{option.label}</p>
                  </div>
                ))}
              </div>
              <div className="Container RegistryItemList Filters" id="status">
                <h1 className="Filters" id="status">Status</h1>
                {statusOptions.map((option, index) => (
                  <div className="Container Filters CheckRow" id={"statusCheckRow"+index} key={index}>
                    <input checked={statusChecked === option.value} onChange={() => onStatusChange(option.value)} type='checkbox' name={"status["+index+"]"}/>
                    <p className="Filters CheckRow Label">{option.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="Container RegistryItemList Items">
              {storeItems.map((store, id) => (
                ((storeChecked === store.storeName || storeChecked === "") && 
                ((parseFloat(priceChecked[0]) <= store.productPrice && 
                parseFloat(priceChecked[1]) >= store.productPrice) || 
                (store.canAddToStandardCart === true && priceChecked[0] === "" && priceChecked[1] === "")) && 
                ((statusChecked === 'available' && store.qtyNeeded > 0) || 
                (statusChecked === "purchased" && store.qtyNeeded === 0) || 
                (statusChecked === "")) && (store.isOnPage === true || width <= 768)) &&
                <Link to={store.productUrl} target='_blank' className="Item" key={id}>
                  <img className='Item Logo' src={store.imageUrl} alt={store.productName}/>
                  <div className="Container Item Text" id={store.storeName}>
                    <h4 className='Item Title'>{store.productName}</h4>
                    <h4 className="Item Price">${store.productPrice.toFixed(2)}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className='Container RegistryItemList PageSelect'>
            {pages.map((page, id) => (
              <button onClick={() => toPage(page.pageNumber)} id={currentPage === page.pageNumber ? "SelectedPage" : "Page"} key={id}>
                <button onClick={() => toPage(page.pageNumber)}>{page.pageNumber}</button>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegistryGallery;
