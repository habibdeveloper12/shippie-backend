import React, { useState } from "react";
import axios from "axios";
import "./banner.css";
import NewBanner from "./NewBanner";
const store = require("store");

const Bannar = () => {
  const [trackData, setTrackData] = useState("");
  const [empty, isEmpty] = useState("");
  let token;
  let apiData = {
    grant_type: "client_credentials",
    client_id: process.env.REACT_APP_FEDEX_AUTH_CLIENT_ID,
    client_secret: process.env.REACT_APP_FEDEX_AUTH_CLIENT_SECRET,
  };
  axios({
    url: "/oauth/token",
    data: apiData,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then((res) => {
    token = res.data.access_token;
  });

  function sendTrackData() {
    let trackNumber = document.getElementById("login_input");
    if (trackNumber.value) {
      isEmpty(false);

      let getPackage = {
        includeDetailedScans: true,
        trackingInfo: [
          {
            trackingNumberInfo: {
              trackingNumber: trackNumber.value,
            },
          },
        ],
      };

      var trackData = JSON.stringify(getPackage);

      axios({
        url: "/track/v1/trackingnumbers",
        data: trackData,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          let obj = res.data.output.completeTrackResults[0].trackResults[0];
          if (obj.error) {
            setTrackData(obj.error.message);
          } else {
            let data = {
              packageNumber: obj.trackingNumberInfo.trackingNumber,
              shippedFrom:
                obj.shipperInformation.address.city +
                ", " +
                obj.shipperInformation.address.stateOrProvinceCode +
                ", " +
                obj.shipperInformation.address.countryName,
              serviceDetail: obj.serviceDetail.description,
              packageAt: obj.latestStatusDetail.description,
              packageStatus: obj.latestStatusDetail.statusByLocale,
              packageLocation:
                obj.latestStatusDetail.scanLocation.city +
                ", " +
                obj.latestStatusDetail.scanLocation.stateOrProvinceCode +
                ", " +
                obj.latestStatusDetail.scanLocation.countryName,
            };
            store.set("foo", data);
            window.location.href = "/track";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      isEmpty(true);
    }
  }
  return (
    <div className="bg-white relative ">
      <div className="w-[80%] bg-white rounded-lg mx-auto h-54 pt-6 drop-shadow-lg ">
        <div className="text-center flex justify-between items-center ">
          <div>
            <h3 className="mb-3 text-5xl text-primary font-bold ">
              Track Your orders Here
            </h3>
          </div>
          <div className="track_form pr-3">
            <input
              id="login_input"
              maxlength="16"
              className="form-control tracking_field"
              placeholder="Invoice Number"
              type="text"
              name="invoice"
              required=""
            />
            <input autocomplete="off" type="hidden" name="auth" value="0" />
            <button
              className="tracking_btn"
              type="submit"
              onClick={sendTrackData}
            >
              TRACK NOW
            </button>
          </div>

          {empty && <h1>Please enter a track number</h1>}
          {trackData && <h1>{trackData}</h1>}
        </div>
      </div>
    </div>
  );
};

export default Bannar;
