import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import HomeNavbar from "./components/chart/HomeNavbar";
import Analyst from "./page/Analyst";
import Home from "./page/Home";
import NotFoundPage from "./page/NotFoundPage";

function Chart() {
    // list รายชื่อสมาชิก สอ. 15 คน
    const [userlist, setUserlist] = useState();

    const userdata_URI = "/api/userdata";

    // ทำงานตอน component ถูกเรียกใช่้งาน
    useEffect(() => {
        //
        feed_data();
        async function feed_data() {
            const requestUser = await fetch(userdata_URI, {
                headers: {
                    Accept: "application/json",
                    ContentType: "application/json",
                },
            }).then((response) => {
                return response.json();
            });
            await setUserlist(requestUser);
        }

        return () => {
            setUserlist();
        };
    }, []);
    console.log(userlist);
    return (
        <>
            <BrowserRouter>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <HomeNavbar />
                        </div>
                        <div className="col-12">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="Analyst" element={<Analyst />} />
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                        </div>
                        {/* <div className="text-center col-lg-12 my-4">
                    <h1>รายชื่อสมาชิก</h1>
                </div>
                <div>
                    <ul>
                        {userlist &&
                            userlist[0] &&
                            userlist.map((val, i) => {
                                return <li key={i}>{val.MEMBER_NAME}&nbsp;{val.MEMBER_SURNAME}</li>;
                            })}
                    </ul>
                </div> */}
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default Chart;

if (document.getElementById("root")) {
    ReactDOM.render(<Chart />, document.getElementById("root"));
}
