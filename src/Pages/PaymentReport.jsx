import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
  Font,
} from "@react-pdf/renderer";
import NJB_Banner from "../assets/images/transparent.png";
import Phone from "../assets/images/phone.png";
import Urdu from "../assets/images/Urdu.png";
import Urdu1 from "../assets/images/Urdu1.png";

// Import the font files
import RegularFont from "../assets/fonts/Raleway-Regular.ttf";
import BoldFont from "../assets/fonts/Raleway-Bold.ttf";
import { useEffect } from "react";

// Register the fonts
Font.register({
  family: "CustomFont",
  fonts: [
    { src: RegularFont, fontWeight: "normal" },
    { src: BoldFont, fontWeight: "bold" },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  image: {
    width: "120px",
    height: "120px",
    margin: 5,
  },
  header1: {
    width: "240px",
    // color: "white",
    paddingVertical: "5px",
    paddingLeft: "5px",
    fontSize: "12px",
    paddingTop: "3px",
    fontWeight: "700",
  },
  header2: {
    width: "100px",
    paddingVertical: "5px",
    paddingLeft: "5px",
    fontSize: "12px",
    paddingTop: "3px",
  },
  header3: {
    width: "100px",
    paddingVertical: "5px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  header4: {
    width: "99px",
    paddingVertical: "5px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell1: {
    fontFamily: "CustomFont",
    fontWeight: "normal",
    width: "240px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell2: {
    fontFamily: "CustomFont",
    fontWeight: "normal",
    width: "100px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell3: {
    fontFamily: "CustomFont",
    fontWeight: "normal",
    width: "100px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  cell4: {
    fontFamily: "CustomFont",
    fontWeight: "normal",
    width: "100px",
    fontSize: "12px",
    paddingTop: "3px",
    paddingLeft: "5px",
  },
  accountInfoWrraper: {
    width: "400px",
    marginTop: 20,
  },
  accountInfoCard: {
    width: "400px",
    paddingVertical: 3,
    display: "flex",
    flexDirection: "row",
  },
  accountInfoTitle: {
    fontFamily: "CustomFont",
    fontWeight: "bold",
    fontSize: "13px",
    width: "120px",
    textAlign: "right",
    paddingRight: 3,
  },
  accountInfo: {
    width: "280px",
    fontFamily: "CustomFont",
    fontWeight: "normal",
    fontSize: "13px",
    textAlign: "left",
  },
  accountGrandWrraper: {
    width: "220px",
    paddingVertical: 5,
  },
});

// Create Document Component
function PaymentReport(props) {
  return (
    <Document>
      {/*render a single page*/}
      <Page size="A4" style={styles.page}>
        {/* ************************************** */}
        {/* Header */}
        {/* ************************************** */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          fixed
        >
          <Text
            style={{
              fontFamily: "CustomFont",
              fontWeight: "bold",
              fontSize: "10px",
            }}
          >
            Developed By: Zain Ul Basit
          </Text>
          <Text
            style={{
              fontFamily: "CustomFont",
              fontWeight: "bold",
              fontSize: "10px",
            }}
          >
            Email: zainulbasit486@gmail.com
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginVertical: 30,
          }}
        >
          <Image src={NJB_Banner} style={styles.image} />
          <View>
            <Image src={Urdu} style={{ width: "200px" }} />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "CustomFont",
                fontWeight: "bold",
                fontSize: 25,
                marginBottom: 15,
              }}
            >
              RECIEVING
            </Text>
            <View>
              <Text
                style={{
                  fontFamily: "CustomFont",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Niamat Jan & Brothers
              </Text>
              <Text
                style={{
                  fontFamily: "CustomFont",
                  fontWeight: "normal",
                  fontSize: 13,
                }}
              >
                {`Nowshera Road Sugar Mill Pump\nCharsadda, KPK`}
              </Text>
            </View>
            {/* Contacts */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Image
                src={Phone}
                style={{
                  width: "15px",
                  height: "15px",
                  margin: 5,
                }}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "CustomFont",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  M-Amin: 0311-5000083
                </Text>
                <Text
                  style={{
                    fontFamily: "CustomFont",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  Hayat-A: 0313-8229292
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* ************************************** */}
        {/* Description */}
        {/* ************************************** */}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={Urdu1} style={{ width: "400px" }} />
        </View>
        {/* ************************************** */}
        {/* Bottom Line */}
        {/* ************************************** */}
        <View
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "#032248",
            marginTop: "10px",
          }}
        ></View>
        {/* ************************************** */}
        {/* Payment Detail */}
        {/* ************************************** */}
        <View
          style={{
            marginVertical: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Side */}
          <View>
            <Text
              style={{
                fontFamily: "CustomFont",
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              {props.name}
            </Text>
            <Text
              style={{
                fontFamily: "CustomFont",
                fontWeight: "normal",
                fontSize: 13,
              }}
            >
              {props.contact}
            </Text>
            <Text
              style={{
                fontFamily: "CustomFont",
                fontWeight: "normal",
                fontSize: 13,
              }}
            >
              {props.address}
            </Text>
          </View>
          {/* Right Side */}
          <View>
            {/* Bill Date */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "190px",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "CustomFont",
                  fontWeight: "bold",
                  fontSize: 13,
                  width: "110px",
                }}
              >
                Date:
              </Text>
              <Text
                style={{
                  fontFamily: "CustomFont",
                  fontWeight: "normal",
                  fontSize: 13,
                  paddingLeft: 3,
                }}
              >
                {props.date}
              </Text>
            </View>
            {/* Bill Depositor */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "190px",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "CustomFont",
                  fontWeight: "bold",
                  fontSize: 13,
                  width: "110px",
                }}
              >
                Depositor:
              </Text>
              <Text
                style={{
                  fontFamily: "CustomFont",
                  fontWeight: "normal",
                  fontSize: 13,
                  paddingLeft: 3,
                }}
              >
                {props.depositor}
              </Text>
            </View>
            {/* Bill Method */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "190px",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "CustomFont",
                  fontWeight: "bold",
                  fontSize: 13,
                  width: "110px",
                }}
              >
                Method:
              </Text>
              <Text
                style={{
                  fontFamily: "CustomFont",
                  fontWeight: "normal",
                  fontSize: 13,
                  paddingLeft: 3,
                }}
              >
                {props.method}
              </Text>
            </View>
          </View>
        </View>
        {/* ************************************** */}
        {/* Bottom Line */}
        {/* ************************************** */}
        <View
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "#032248",
            marginTop: "10px",
          }}
        ></View>
        {/* Body */}
        <View style={{ flex: 9 }}>
          {/* Payment */}
          {/* Main Wrapper */}
          <View
            style={{
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {/* Inner Wrapper */}
            <View style={styles.accountInfoWrraper}>
              <View style={styles.accountInfoCard}>
                <Text style={styles.accountInfoTitle}>Arears:</Text>
                <Text style={styles.accountInfo}>{props.arears}/-</Text>
              </View>
              <View style={styles.accountInfoCard}>
                <Text style={styles.accountInfoTitle}>Paid:</Text>
                <Text style={styles.accountInfo}>{props.paid}/-</Text>
              </View>
              <View style={styles.accountInfoCard}>
                <Text style={styles.accountInfoTitle}>Paid in Words:</Text>
                <Text style={styles.accountInfo}>{props.amount_in_words} only</Text>
              </View>
              <View style={styles.accountInfoCard}>
                <Text style={styles.accountInfoTitle}>Remaining: </Text>
                <Text style={styles.accountInfo}>{Number(props.arears) - Number(props.paid)}/-</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
export default PaymentReport;
