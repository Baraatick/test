import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import useFetch from "../hooks/useFetch";
import useFetchAdd from "../hooks/useFetch";
import useFetchextraproducts from "../hooks/useFetch";
import axios from "axios";

function Home() {
  const [base, setBase] = useState();
  const [add, setAdd] = useState();
  const [product, setProduct] = useState();
  const [fetching, isDataLoading, dataError] = useFetch(async () => {
    const response = await axios.get(
      "http://localhost:1337/api/posts?populate=*"
    );
    setBase(response.data || {});
    return response;
  });

  const [fetchingAdd, isDataLoadingAdd, dataErrorAdd] = useFetchAdd(
    async () => {
      const response = await axios.get(
        "http://localhost:1337/api/adds?populate=*"
      );
      setAdd(response.data || {});
      return response;
    }
  );

  const [fetchingextraproducts, isDataLoadingproducts, dataErrorproducts] =
    useFetchextraproducts(async () => {
      const response = await axios.get(
        "http://localhost:1337/api/extraproducts?populate=*"
      );
      setProduct(response.data || {});
      return response;
    });

  useEffect(() => {
    fetching();
    fetchingAdd();
    fetchingextraproducts();
  }, []);
  console.log(product);

  return (
    <>
      <div className={styles.white}></div>
      <div>
        <div className="hat">
          <img
            src="src/assets/img/hat.png"
            about="hat"
            className={styles.hat}
          />
        </div>
        <p className={styles.text}>KIT3D</p>
        <div className={styles.container}>
          <div className={styles.all}>
            <img src="src/assets/img/button.png" alt="" />
            <div className={styles.all__cards}>
              {base?.data?.map((post, index) => (
                <div className={styles.card} key={index}>
                  {post?.attributes?.post_img?.data?.attributes?.url && (
                    <img
                      src={`http://localhost:1337${post?.attributes?.post_img?.data?.attributes?.url}`}
                      alt="card"
                      className={styles.productsimg}
                    />
                  )}
                  <div className={styles.test}>{post?.attributes?.test}</div>
                  <div className={styles.wrapper}>
                    <div className={styles.price}>
                      {post?.attributes?.price} Tenge
                    </div>
                    <img
                      style={{
                        width: "25px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      src={`http://localhost:1337${post?.attributes?.cart?.data[0]?.attributes?.url}`}
                      alt="card"
                      className={styles.cart}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.main}>
            {add?.data?.map((add, index) => (
              <div className={styles.mainline} key={index}>
                <img
                  src={`http://localhost:1337${add?.attributes?.add?.data[0]?.attributes?.url}`}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className={styles.extraproducts}>
            {product?.data?.map((product, index) => (
              <div className={styles.extraproduct} key={index}>
                <div className={styles.cover}>
                  <img
                    src={`http://localhost:1337${product?.attributes?.extraproduct?.data?.attributes?.url}`}
                    alt=""
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.title}>
                    {product?.attributes?.title}
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.price}>
                      {product?.attributes?.price} T
                    </div>
                    <img

                      style={{
                        width: "25px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      src={`http://localhost:1337${product?.attributes?.cart?.data?.attributes?.url}`}
                      alt="card"
                      className={styles.cart}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
