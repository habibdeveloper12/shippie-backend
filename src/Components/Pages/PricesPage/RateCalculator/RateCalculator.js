import React from "react";
import boxImg from "../../../../Assect/3x3x3.png";
import { useNavigate } from "react-router-dom";

const RateCalculator = () => {
  const navigate = useNavigate();
  return (
    <div className="pb-32 bg-white pl-12">
      <main>
        <p className="hidden text-white md:block absolute top-0 mt-[-100px] left-40  font-extrabold text-3xl">
          Ship from
        </p>
        <div className="bg-white rounded-xl  overflow-hidden w-[80%] absolute top-0 left-[11.6%] mt-[-45px] shadow-lg pb-7">
          <div className="container flex mx-auto max-w-5xl 2xl:max-w-6xl mx-auto sm:px-5  ">
            <div className=" w-full">
              <div className=" mx-auto">
                <div className="rounded-xl overflow-hidden flex items-center justify-center ">
                  <div className="bg-white">
                    <div className="flex flex-col">
                      <div className="pl-16 grid grid-cols-[56px_auto] md:flex items-center gap-y-3 md:gap-y-0 md:gap-x-6 mt-6">
                        <p className=" font-semibold">From</p>
                        <div className="px-3  bg-[#DDE2E5] rounded-3xl text-gray-600 font-semibold text-left md:text-center w-full max-w-[280px] md:w-[240px] border-2 py-2 bg-gray-2 border-[#7B8794]">
                          <span className="pl-4 md:pl-0">Singapore</span>
                        </div>
                        <p className="font-semibold">to</p>
                        <div className="pill-button border-2 border-[#844FFA] rounded-full relative flex items-center text-[#9450FA] w-full max-w-[280px] md:w-[240px] hover:cursor-pointer px-3 pl-4 md:pl-3">
                          <select
                            id="recipientCountry"
                            name="country"
                            className="rounded-xl focus:outline-none w-full h-full py-2 hover:cursor-pointer font-semibold appearance-none bg-transparent text-left md:text-center"
                          >
                            <option value="none" disabled=""></option>
                            <optgroup label="Frequent Picks">
                              <option value="AU">Australia</option>
                              <option value="BE">Belgium</option>
                              <option value="CA">Canada</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                              <option value="HK">Hong Kong</option>
                              <option value="ID">Indonesia</option>
                              <option value="JP">Japan</option>
                              <option value="MY">Malaysia</option>
                              <option value="NL">Netherlands</option>
                              <option value="NZ">New Zealand</option>
                              <option value="PH">Philippines</option>
                              <option value="ES">Spain</option>
                              <option value="SE">Sweden</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US" selected>
                                United States
                              </option>
                            </optgroup>
                            <optgroup label="All">
                              <option value="AF">Afghanistan</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AG">Antigua &amp; Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">Bolivia</option>
                              <option value="BQ">Bonaire</option>
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BR">Brazil</option>
                              <option value="BN">Brunei</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CO">Colombia</option>
                              <option value="CG">Congo</option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="HR">Croatia</option>
                              <option value="CW">Curacao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="CD">
                                Democratic Republic of the Congo
                              </option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="TL">East Timor</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="SZ">Eswatini</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GN">Guinea</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="CI">
                                Ivory Coast / Cote d&#x27;Ivoire
                              </option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">Laos</option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macau</option>
                              <option value="MK">Macedonia</option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">Micronesia</option>
                              <option value="MD">Moldova</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="NA">Namibia</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="AN">Netherlands Antilles</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="MP">
                                Northern Mariana Islands
                              </option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PW">Palau</option>
                              <option value="PS">Palestine</option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="QA">Qatar</option>
                              <option value="RO">Romania</option>
                              <option value="RW">Rwanda</option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="SX">Saint Maarten</option>
                              <option value="MF">Saint Martin</option>
                              <option value="VC">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="WS">Samoa</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="ZA">South Africa</option>
                              <option value="KR">South Korea</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SR">Suriname</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syrian Arab Republic</option>
                              <option value="TW">Taiwan</option>
                              <option value="TZ">
                                Tanzania, United Republic of Tanzania
                              </option>
                              <option value="TH">Thailand</option>
                              <option value="TG">Togo</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="UG">Uganda</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US" selected="">
                                United States
                              </option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Vietnam</option>
                              <option value="VG">
                                Virgin Islands, British
                              </option>
                              <option value="VI">Virgin Islands, U.S.</option>
                              <option value="WF">Wallis and Futuna</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </optgroup>
                          </select>
                          <svg
                            width="16px"
                            height="12px"
                            className="absolute right-3 w-[12px] h-[8px]"
                            viewBox="0 0 16 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M1 1L8 9L15 1"
                              stroke="#844FFA"
                              strokeWidth="2"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white md:px-12 py-6 relative mt-6">
                    <button
                      onClick={() => navigate("/get-a-quote")}
                      type="button"
                      id="get-a-quote-button"
                      className="pill-button button-hover b cursor-pointer select-none flex items-center justify-center focus:outline-purple-200  hover:bg-[#6211cb] bg-[#844ffa]  w-[calc(100%-6rem)] max-w-[280px] md:w-[180px] h-[40px] mx-auto font-bold text-white rounded-full disabled:bg-disabled-purple disabled:border-transparent"
                    >
                      Get A Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RateCalculator;
