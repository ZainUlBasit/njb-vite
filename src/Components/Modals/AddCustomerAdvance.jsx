import React, { useEffect, useState } from "react";
import ModalBottomLine from "./ModalBottomLine";
import ModalButton from "../Buttons/ModalButton";
import CustomModal from "./CustomModal";
import SimpleTextInput from "../Input/SimpleTextInput";
import { fetchCustomers } from "../../store/Slices/CustomerSlice";
import { useDispatch, useSelector } from "react-redux";
import SimpleSelectComp from "../Select/SimpleSelectComp";
import CustomerDataServices from "../../Services/customer.services";
import AddingLoader from "../Loader/AddingLoader";
import moment from "moment";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import AdvanceReport from "../../Pages/AdvanceReport";
import { PDFDownloadLink } from "@react-pdf/renderer";
import numberToWords from "number-to-words"; // Import the package

const AddCustomerAdvance = ({ open, setOpen }) => {
  const [ID, setID] = useState("");
  const [Advance, setAdvance] = useState("");
  const [AmountInWords, setAmountInWords] = useState("");
  const [Desc, setDesc] = useState("");
  // customer info
  const [CurrentName, setCurrentName] = useState("");
  const [CurrentAddress, setCurrentAddress] = useState("");
  const [CurrentContact, setCurrentContact] = useState("");
  useEffect(() => {
    Customers.map((cus) => {
      if (cus._id === ID) {
        setCurrentName(cus.name);
        setCurrentAddress(cus.address);
        setCurrentContact(cus.contact);
      }
    });
  }, [ID]);

  useEffect(() => {
    if (Number(Advance) !== 0) {
      const amountWords = numberToWords.toWords(Number(Advance), {
        language: "en", // You can specify the language here
      });
      let i = 1;
      setAmountInWords(() => {
        let return_value = "";
        for (let i = 0; i < amountWords.length; i++) {
          if (
            i !== Number(amountWords.length) - 1 &&
            i !== Number(amountWords.length) - 2
          ) {
            return_value += amountWords[i];
          }
        }
        return return_value;
      });
    }
  }, [Advance]);

  const [CurDate, setCurDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [ProcessLoading, setProcessLoading] = useState(false);
  const Customers = useSelector((state) => state.CustomerReducer.data);
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    setProcessLoading(true);
    e.preventDefault();
    if (ID !== "" && Advance !== "") {
      try {
        const timestamp = firebase.firestore.Timestamp.fromDate(
          new Date(CurDate)
        );

        await CustomerDataServices.updateCustomerAdvance(ID, Advance);
        await CustomerDataServices.addAdvanceLedger({
          customerid: ID,
          advance: Advance,
          desc: Desc,
          date: timestamp,
        });
        alert("Customer Advance successfully added..!");
        setOpen(false);
        dispatch(fetchCustomers());
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("fill all fields");
    }
    setProcessLoading(false);
  };

  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);
  return (
    <CustomModal title={"Customer Advance"} open={open} setOpen={setOpen}>
      <form className="flex flex-col justify-center items-center">
        <SimpleSelectComp
          value={ID}
          setValue={setID}
          label={"Select Customer"}
          data={Customers}
        />
        <SimpleTextInput
          label="Enter Advance Amount"
          placeholder="Enter Advance Amount"
          type="number"
          id="advance"
          name="advance"
          value={Advance}
          setValue={setAdvance}
        />
        <SimpleTextInput
          label="Enter Advance Desc"
          placeholder="Enter Advance Desc"
          type="text"
          id="desc"
          name="desc"
          value={Desc}
          setValue={setDesc}
        />
        <SimpleTextInput
          type="date"
          id="date"
          name="date"
          value={CurDate}
          setValue={setCurDate}
        />
        <ModalBottomLine />
      </form>
      {ProcessLoading ? (
        <AddingLoader />
      ) : (
        <div className="flex justify-center items-center">
          <PDFDownloadLink
            document={
              <AdvanceReport
                date={CurDate}
                name={CurrentName}
                address={CurrentAddress}
                contact={CurrentContact}
                amount={Advance}
                amount_in_words={AmountInWords}
                desc={Desc}
              />
            }
            fileName={`Advance Report`}
          >
            <ModalButton title={"add advance"} onClick={onSubmit} />
          </PDFDownloadLink>
        </div>
      )}
    </CustomModal>
  );
};

export default AddCustomerAdvance;
