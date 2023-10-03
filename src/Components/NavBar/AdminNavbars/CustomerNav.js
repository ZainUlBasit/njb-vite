import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { NavComp } from "../../../Pages/Admin/Styling/NavComp";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import DnsIcon from "@mui/icons-material/Dns";
import CategoryIcon from "@mui/icons-material/Category";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import AdminNavButton from "../../Buttons/AdminNavButton";
const CustomerNav = () => {
  const isActive_ = useSelector((state) => state.SideMenuReducer.ActiveState);
  const data = useSelector((state) => state.AutoLoginSliceReducer.data);
  return (
    <NavComp
      isAct={isActive_}
      className={isActive_ ? "isNotActiveStyling" : "isNotActiveStyling"}
    >
      <div className="flex flex-wrap mb-[5px] mt-[5px] justify-center items-center">
        {data.userdata.role === "shop" ? (
          <AdminNavButton
            title={"Add New Bill"}
            type={"link"}
            link={"/add-new-bill"}
            BIcon={NewspaperIcon}
            width={"160px"}
          />
        ) : (
          <></>
        )}
        <AdminNavButton
          title={"Customer Info"}
          type={"link"}
          link={"/customer_info"}
          BIcon={DnsIcon}
          width={"160px"}
        />

        <AdminNavButton
          title={"Customer Kata"}
          type={"link"}
          link={"/customer_kata"}
          BIcon={CategoryIcon}
          width={"160px"}
        />

        {data.userdata.role === "shop" ? (
          <>
            <AdminNavButton
              title={"Item Return"}
              type={"link"}
              link={"/customer_return"}
              BIcon={PlaylistAddIcon}
              width={"160px"}
            />

            <AdminNavButton
              title={"Invoice Edit"}
              type={"link"}
              link={"/customer_invoices"}
              BIcon={BookmarkAddIcon}
              width={"160px"}
            />
          </>
        ) : (
          <></>
        )}

        <AdminNavButton
          title={"Ledger"}
          type={"link"}
          link={"/customer_ledger"}
          BIcon={RequestQuoteIcon}
          width={"160px"}
        />
      </div>
    </NavComp>
  );
};

export default CustomerNav;
// INSERT INTO items (id, itemcode, name, company, maincat, subcat, unit, purchase, sale, addeddate, qty) VALUES (
