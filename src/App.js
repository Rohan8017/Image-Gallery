
import { useMemo, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Pagination from './component/Pagination';

function App() {
  const [toggleDisplay, setToggleDisplay] = useState('grid');
  const [query, setQuery] = useState('');
  const [sortType,setSortType]=useState({
    fileSize:'ASC',
    date:'ASC'
  })

  const [images, setImages] = useState([
    {
      id: 1,
      name: 'nike',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '12/9/20',
      fileSize: '2.5'
    },
    {
      id: 2,
      name: 'addidas',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '14/9/20',
      fileSize: '2.8'
    },
    {
      id: 3,
      name: 'puma',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '20/9/20',
      fileSize: '2.9'
    },
    {
      id: 4,
      name: 'abibus',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '29/9/20',
      fileSize: '3.4'
    },
    {
      id: 5,
      name: 'bata',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '12/1/22',
      fileSize: '2.1'
    },
    {
      id: 6,
      name: 'ajanta',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '2/11/20',
      fileSize: '5.9'
    },
    {
      id: 7,
      name: 'sreelathers',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '25/9/20',
      fileSize: '1.3'
    },
    {
      id: 8,
      name: 'puma',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '5/1/23',
      fileSize: '12.1'
    },
    {
      id: 9,
      name: 'nike',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '04/06/20',
      fileSize: '1.9'
    },
    {
      id: 10,
      name: 'addidas',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '12/5/20',
      fileSize: '6.8'
    },
    {
      id: 11,
      name: 'sreelathers',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '12/9/36',
      fileSize: '4.2'
    },
    {
      id: 12,
      name: 'addidas',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '12/9/18',
      fileSize: '11.9'
    },
    {
      id: 14,
      name: 'nike',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '12/9/20',
      fileSize: '2.5'
    },
    {
      id: 15,
      name: 'addidas',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '14/9/20',
      fileSize: '2.8'
    },
    {
      id: 16,
      name: 'puma',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '20/9/20',
      fileSize: '2.9'
    },
    {
      id: 17,
      name: 'abibus',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '29/9/20',
      fileSize: '3.4'
    },
    {
      id: 18,
      name: 'bata',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '12/1/22',
      fileSize: '2.1'
    },
    {
      id: 19,
      name: 'ajanta',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '2/11/20',
      fileSize: '5.9'
    },
    {
      id: 20,
      name: 'sreelathers',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '25/9/20',
      fileSize: '1.3'
    },
    {
      id: 21,
      name: 'puma',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '5/1/23',
      fileSize: '12.1'
    },
    {
      id: 22,
      name: 'nike',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '04/06/20',
      fileSize: '1.9'
    },
    {
      id: 23,
      name: 'addidas',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '12/5/20',
      fileSize: '6.8'
    },
    {
      id: 24,
      name: 'sreelathers',
      src: 'https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2018/12/Nike-FC-React-Shoes.jpeg?ssl=1',
      date: '12/9/36',
      fileSize: '4.2'
    },
  ])
  const filteredArray = useMemo(() => {
    return images.filter((image) => {
      return image.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || image.fileSize.includes(query.toString()) || image.date.includes(query.toString())
    })
  },[query,images])

  const [currentPage,setCurrentPage]=useState(1);
  const itemPerPage=8;
  const nPage= Math.ceil(filteredArray.length / itemPerPage );
  const Number=[...Array(nPage+1).keys()].slice(1);
  const indexOfLastElement=currentPage * itemPerPage;
  const indexOfFirstElement=indexOfLastElement - itemPerPage;
  const records=filteredArray.slice(indexOfFirstElement,indexOfLastElement)

  const handlePrevpage=()=>{
    if(currentPage !==1){
      setCurrentPage((currentPage)=>currentPage-1)
    }
  }

  const handleNextvpage=()=>{
    if(currentPage !==nPage){
      setCurrentPage((currentPage)=>currentPage+1)
    }
  }

  const setPage=(pageno)=>{
    setCurrentPage(pageno);
  }

  const HandleToggleDisplay = () => {
    if (toggleDisplay === 'grid') {
      setToggleDisplay('flex');
    } else {
      setToggleDisplay('grid');
    }
  }

  const handleSortbySize = () => {
    if(sortType.fileSize === 'ASC'){
      let cloneImageList = [...images].sort(function (a, b) {
        return a.fileSize - b.fileSize;
      })
      setImages(cloneImageList);
      setSortType({...sortType,fileSize :'DSC'});
    }else{
      let cloneImageList = [...images].sort(function (a, b) {
        return b.fileSize - a.fileSize;
      })
      setImages(cloneImageList);
      setSortType({...sortType,fileSize :'ASC'});
      
    }
  }

  const handleSortbyDate = () => {
    if(sortType.date === 'ASC'){
      let cloneImageList = [...images].sort((a, b) => {
        return new Date(a.date) > new Date(b.date) ? 1 : -1;
      })
      setImages(cloneImageList);
      setSortType({...sortType,date :'DSC'});

    }else{
      let cloneImageList = [...images].sort((a, b) => {
        return new Date(a.date) < new Date(b.date) ? 1 : -1;
      })
      setImages(cloneImageList);
      setSortType({...sortType,date :'DSC'});

    }
  }

  return (
    <div className="App">
      <Header setToggleDisplay={setToggleDisplay} toggleDisplay={toggleDisplay} HandleToggleDisplay={HandleToggleDisplay} />
      <Main toggleDisplay={toggleDisplay} handleSortbySize={handleSortbySize} handleSortbyDate={handleSortbyDate} setQuery={setQuery} records={records} sortType={sortType}/>
      <Pagination Number={Number} handlePrevpage={handlePrevpage} handleNextvpage={handleNextvpage} currentPage={currentPage} nPage={nPage} setPage={setPage}/>
    </div>
  );
}

export default App;
