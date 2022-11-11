import { useEffect, useState } from "react";
import HitList from "./components/hit-list/HitList";
import { getNews } from "./services/news.services";
import { useGetNews } from "./useGetNews";
import "./App.css"
import Form from "./components/form-search/Form";

function App() {
    const { hits, page, totalPage, nextPage, prevPage, loading } = useGetNews();

    return (
        <div className='container'>
            <Form/>
            <div className="page">
              <button onClick={prevPage}>Prev</button>
              {page} of {totalPage}
              <button onClick={nextPage}>Next</button>
            </div>
            {loading ? <div>Loading...</div> : <HitList hits={hits} />}
        </div>
    );
}

export default App;