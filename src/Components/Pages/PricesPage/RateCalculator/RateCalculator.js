import React from 'react';
import boxImg from '../../../../Assect/3x3x3.png'
const RateCalculator = () => {
    return (
        <div>
            <main>
                <div className="bg-[#F6F6F6] min-h-[100vh]">
                    <div className="container max-w-5xl 2xl:max-w-6xl mx-auto sm:px-5 py-8 sm:py-12">
                        <div className=" w-full pb-8 ">
                            <div className="max-w-4xl mx-auto">
                                <div className="rounded-xl overflow-hidden bg-[#F0E8FE]">
                                    <div className="bg-white px-6 md:px-8 pb-5 md:pt-12">
                                        <div className="flex flex-col">
                                            <p className="hidden md:block  font-extrabold text-3xl">Ship from</p>
                                            <div className="grid grid-cols-[56px_auto] md:flex items-center gap-y-3 md:gap-y-0 md:gap-x-6 mt-6">
                                                <p className="md:hidden font-semibold">From</p>
                                                <div className="px-3  bg-[#DDE2E5] rounded-3xl text-gray-600 font-semibold text-left md:text-center w-full max-w-[280px] md:w-[240px] border-2 py-2 bg-gray-2 border-[#7B8794]"><span className="pl-4 md:pl-0">Singapore</span></div>
                                                <p className="font-semibold">to</p>
                                                <div className="pill-button border-2 border-[#844FFA] rounded-full relative flex items-center text-[#9450FA] w-full max-w-[280px] md:w-[240px] hover:cursor-pointer px-3 pl-4 md:pl-3">
                                                    <select id="recipientCountry" name="country" className="rounded-xl focus:outline-none w-full h-full py-2 hover:cursor-pointer font-semibold appearance-none bg-transparent text-left md:text-center">
                                                        <option value="none" disabled=""></option>
                                                        <optgroup label="Frequent Picks">
                                                            <option value="AU">Australia</option><option value="BE">Belgium</option><option value="CA">Canada</option><option value="FI">Finland</option>
                                                            <option value="FR">France</option><option value="DE">Germany</option><option value="HK">Hong Kong</option><option value="ID">Indonesia</option>
                                                            <option value="JP">Japan</option><option value="MY">Malaysia</option><option value="NL">Netherlands</option><option value="NZ">New Zealand</option>
                                                            <option value="PH">Philippines</option><option value="ES">Spain</option><option value="SE">Sweden</option><option value="GB">United Kingdom</option>
                                                            <option value="US" selected>United States</option>
                                                        </optgroup>
                                                        <optgroup label="All">
                                                            <option value="AF">Afghanistan</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AG">Antigua &amp; Barbuda</option>
                                                            <option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option>
                                                            <option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option>
                                                            <option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BE">Belgium</option><option value="BZ">Belize</option>
                                                            <option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option>
                                                            <option value="BQ">Bonaire</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BR">Brazil</option>
                                                            <option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option>
                                                            <option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option>
                                                            <option value="KY">Cayman Islands</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option>
                                                            <option value="CO">Colombia</option><option value="CG">Congo</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option>
                                                            <option value="HR">Croatia</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option>
                                                            <option value="CD">Democratic Republic of the Congo</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option>
                                                            <option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="TL">East Timor</option><option value="EC">Ecuador</option>
                                                            <option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="ER">Eritrea</option><option value="EE">Estonia</option>
                                                            <option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option>
                                                            <option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option>
                                                            <option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option>
                                                            <option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option>
                                                            <option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option>
                                                            <option value="GN">Guinea</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HN">Honduras</option>
                                                            <option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option>
                                                            <option value="ID">Indonesia</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IL">Israel</option>
                                                            <option value="IT">Italy</option><option value="CI">Ivory Coast / Cote d&#x27;Ivoire</option><option value="JM">Jamaica</option>
                                                            <option value="JP">Japan</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option>
                                                            <option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option>
                                                            <option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option>
                                                            <option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macau</option>
                                                            <option value="MK">Macedonia</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option>
                                                            <option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option>
                                                            <option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="MX">Mexico</option>
                                                            <option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option>
                                                            <option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option>
                                                            <option value="NA">Namibia</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="AN">Netherlands Antilles</option>
                                                            <option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option>
                                                            <option value="NG">Nigeria</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option>
                                                            <option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestine</option><option value="PA">Panama</option>
                                                            <option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option>
                                                            <option value="PL">Poland</option><option value="PT">Portugal</option><option value="QA">Qatar</option><option value="RO">Romania</option>
                                                            <option value="RW">Rwanda</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option>
                                                            <option value="SX">Saint Maarten</option><option value="MF">Saint Martin</option><option value="VC">Saint Vincent and the Grenadines</option>
                                                            <option value="WS">Samoa</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option>
                                                            <option value="SC">Seychelles</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="ZA">South Africa</option>
                                                            <option value="KR">South Korea</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SR">Suriname</option>
                                                            <option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syrian Arab Republic</option><option value="TW">Taiwan</option>
                                                            <option value="TZ">Tanzania, United Republic of Tanzania</option><option value="TH">Thailand</option><option value="TG">Togo</option>
                                                            <option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option>
                                                            <option value="TC">Turks and Caicos Islands</option><option value="UG">Uganda</option><option value="AE">United Arab Emirates</option>
                                                            <option value="GB">United Kingdom</option><option value="US" selected="">United States</option><option value="UY">Uruguay</option>
                                                            <option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option>
                                                            <option value="VG">Virgin Islands, British</option><option value="VI">Virgin Islands, U.S.</option><option value="WF">Wallis and Futuna</option>
                                                            <option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>
                                                        </optgroup>
                                                    </select>
                                                    <svg width="16px" height="12px" className="absolute right-3 w-[12px] h-[8px]" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                                        <path d="M1 1L8 9L15 1" stroke="#844FFA" strokeWidth="2" strokeLinecap="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="border-border-gray border-t m-0" />
                                    <div className="bg-white py-4 md:py-8 px-6 md:px-8">
                                        <div className="flex flex-col">
                                            <p>Add-on Services</p>
                                            <div className="grid grid-cols-2 gap-y-1 w-full md:w-[80%] text-xs md:text-base">
                                                <div className="flex items-start mt-4 md:md-2">
                                                    <input type="checkbox" id="pack-items" className="appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5" />
                                                    <div className="inline">
                                                        <label for="pack-items" className="text-light-purple inline text-true-black leading-snug"><span>Pack my items</span></label>
                                                        <div className="inline md:pl-0.5"></div>
                                                    </div>
                                                </div>
                                                <div className="flex items-start mt-4 md:md-2">
                                                    <input type="checkbox" id="charge-taxes" className="appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5" />
                                                    <div className="inline">
                                                        <label for="charge-taxes" className="text-light-purple inline text-true-black leading-snug"><span>Pre-pay taxes</span></label>
                                                        <div className="inline md:pl-0.5">
                                                            <div className="relative inline-block">
                                                                <div className="relative">
                                                                    <div
                                                                        id="tooltip"
                                                                        className="absolute -translate-y-[calc(100%+14px)] -right-[100%] sm:right-auto sm:-translate-x-[calc(50%-14px)] pointer-events-none opacity-0 text-sm transition-opacity duration-300"
                                                                    >
                                                                        <div className="font-medium text-white bg-[#495057] rounded-lg shadow-sm relative z-10 py-2 md:px-3">
                                                                            <p className="max-w-[300px] w-max text-center">If not charged to sender, amount will be determined by Customs and charged to the recipient.</p>
                                                                            <div className="absolute hidden md:block w-full h-[30px] opacity-0"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="arrow absolute -translate-y-[calc(100%+4px)] left-[50%] -translate-x-[40%] border-t-[10px] border-x-[8px] border-x-transparent border-[#495057] w-0 h-0 pointer-events-none opacity-0 text-sm transition-opacity duration-300"
                                                                    ></div>
                                                                    <svg className="inline w-4 md:w-5 mb-1 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M12 21.9999C17.5228 21.9999 22 17.5228 22 11.9999C22 6.47709 17.5228 1.99994 12 1.99994C6.47715 1.99994 2 6.47709 2 11.9999C2 17.5228 6.47715 21.9999 12 21.9999Z"
                                                                            stroke="#7B8794"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        ></path>
                                                                        <path d="M12 7.99994V11.9999" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <circle cx="12" cy="15.9999" r="1" fill="#7B8794"></circle>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-start mt-4 md:md-2">
                                                    <input type="checkbox" id="fragile-pack" className="appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5" />
                                                    <div className="inline">
                                                        <label for="fragile-pack" className="text-light-purple inline text-true-black leading-snug"><span>Fragile pack</span></label>
                                                        <div className="inline md:pl-0.5"></div>
                                                    </div>
                                                </div>
                                                <div className="flex items-start mt-4 md:md-2">
                                                    <input type="checkbox" id="insure-shipment" className="appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5" />
                                                    <div className="inline">
                                                        <label for="insure-shipment" className="text-light-purple inline text-true-black leading-snug"><span>Insure Shipment</span></label>
                                                        <div className="inline md:pl-0.5">
                                                            <div className="relative inline-block">
                                                                <div className="relative">
                                                                    <div
                                                                        id="tooltip"
                                                                        className="absolute -translate-y-[calc(100%+14px)] -right-[100%] sm:right-auto sm:-translate-x-[calc(50%-14px)] pointer-events-none opacity-0 text-sm transition-opacity duration-300"
                                                                    >
                                                                        <div className="font-medium text-white bg-[#495057] rounded-lg shadow-sm relative z-10 py-2 md:px-3">
                                                                            <p className="max-w-[300px] w-max text-center">
                                                                                <span>
                                                                                    Scope the max. value that FedEx is liable to pay in the event of shipment loss/damage resulting from their failure.
                                                                                    <br />
                                                                                    <br />
                                                                                    You pay 2.4% of this maximum value

                                                                                    <br />
                                                                                    (i.e. your declared value) to scope FedEx’s liability.

                                                                                    <br />
                                                                                    <br />
                                                                                    See

                                                                                    <a href="https://www.fedex.com/content/dam/fedex/apac-asia-pacific/downloads/fedex-scc-spac.pdf" target="_blank" rel="noreferrer noopener">
                                                                                        <span className="text-blue-400 underline underline-offset-1 cursor-pointer">T&amp;C</span>
                                                                                    </a>
                                                                                    (Declared Value and Limits of Liability, pg 10-11)
                                                                                </span>
                                                                            </p>
                                                                            <div className="absolute hidden md:block w-full h-[30px] opacity-0"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="arrow absolute -translate-y-[calc(100%+4px)] left-[50%] -translate-x-[40%] border-t-[10px] border-x-[8px] border-x-transparent border-[#495057] w-0 h-0 pointer-events-none opacity-0 text-sm transition-opacity duration-300"
                                                                    ></div>
                                                                    <svg className="inline w-4 md:w-5 mb-1 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M12 21.9999C17.5228 21.9999 22 17.5228 22 11.9999C22 6.47709 17.5228 1.99994 12 1.99994C6.47715 1.99994 2 6.47709 2 11.9999C2 17.5228 6.47715 21.9999 12 21.9999Z"
                                                                            stroke="#7B8794"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        ></path>
                                                                        <path d="M12 7.99994V11.9999" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <circle cx="12" cy="15.9999" r="1" fill="#7B8794"></circle>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="box-start" className="bg-bg-purple pt-4 md:pt-8 md:mt-0 scroll-mt-[80px]">
                                        <div className="md:mb-4 ">
                                            <div className="grid md:grid-cols-2 px-6 md:px-8">
                                                <div className="order-last md:order-first place-self-center">
                                                    <img className=' w-48' src={boxImg} />
                                                </div>
                                                <div className="text-sm text-left my-4 mr-4 pb-6 md:pb-0 prose marker:text-subtext-gray hidden md:block">
                                                    <p className="font-semibold">Don’t want to top-up later?</p>
                                                    <ul>
                                                        <li>Measure from the longest cross-section of each side of your box</li>
                                                        <li>Round up to the nearest 0.5 cm when you measure</li>
                                                    </ul>
                                                    <p>Don’t worry about over-declaring, we will refund you the excess if that happens.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="border-border-gray border-t mt-1 mb-0" />
                                        <div className="w-full px-8 md:px-16 lg:px-24 pb-2">
                                            <div className="flex flex-col md:flex-row md:justify-between md:pt-8 md:pb-8 mt-4 md:mt-0">
                                                <div className="flex flex-col mb-3 md:mb-0 relative">
                                                    <p className="mb-2">Estimate Box Size</p>
                                                    <div className="relative w-[90%] max-w-[285px] md:max-w-[230px] bg-white rounded-xl">
                                                        <select
                                                            id="box-selection-p0"
                                                            name="box-selection"
                                                            className="rounded-xl border border-border-gray shadow-border focus:border-light-purple focus:shadow-border-focus focus:outline-none w-full h-[40px] appearance-none bg-transparent pl-3 pr-6"
                                                        >
                                                            <option value="-1" selected>Own Box</option>
                                                            <option value="0">Slim 1 kg (23 x 15 x 9)</option>
                                                            <option value="1">Slim 1.5 kg (26 x 26 x 9)</option>
                                                            <option value="2">Slim 3.5 kg (44 x 39 x 10)</option>
                                                            <option value="3">Standard 5 kg (33 x 24 x 31)</option>
                                                            <option value="4">Standard 7 kg (42 x 26 x 32)</option>
                                                            <option value="5">Standard 12 kg (49 x 35 x 35)</option>
                                                            <option value="6">Standard 17 kg (56 x 43 x 35)</option>
                                                            <option value="7">Standard 22 kg (43 x 40 x 65)</option>
                                                            <option value="8">Standard 62 kg (61 x 120 x 42)</option>
                                                        </select>
                                                        <svg width="16px" height="12px" className="absolute w-[12px] h-[8px] right-3.5 top-[45%]" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                                            <path d="M1 1L8 9L15 1" stroke="#373F41" strokeWidth="2" strokeLinecap="round"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="md:mb-2">Box Dimensions</p>
                                                    <div className="flex items-center mb-4 md:mb-0">
                                                        <input type="text" inputmode="decimal" id="length-p0" className="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent shadow-none" value="" />
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mx-3.5 md:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                                        </svg>
                                                    <input type="text" inputmode="decimal" id="width-p0" className="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent" value="" />
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mx-3.5 md:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                                        </svg>
                                                        <input type="text" inputmode="decimal" id="height-p0" className="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent" value="" />
                                                        <span className="text-light-purple ml-3 md:ml-1">cm</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col mb-6 md:mb-0">
                                                    <p className="md:mb-2">Weight</p>
                                                    <div className="flex items-center">
                                                        <input
                                                            type="text"
                                                            inputmode="decimal"
                                                            id="weight-p0"
                                                            className="form-input rounded-xl w-full max-w-[285px] md:w-[55px] md:max-w-full h-[40px] text-dark-purple font-semibold text-center mr-2 md:mr-0 border-transparent"
                                                            value=""
                                                        />
                                                        <span className="text-light-purple ml-1">kg</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-xs text-subtext-gray">
                                                For large fragile items like paintings, speakers, monitors, and bicycles, please

                                                <a href="https://wa.me/6591187971" className="text-dark-purple" target="_blank" rel="noopener noreferrer" tabindex="-1">WhatsApp us</a>
                                                for a custom quote.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-white md:px-12 py-6 relative">
                                        <button
                                            type="button"
                                            id="get-a-quote-button"
                                            className="pill-button button-hover b cursor-pointer select-none flex items-center justify-center focus:outline-purple-200  hover:bg-[#6211cb] bg-[#844ffa]  w-[calc(100%-6rem)] max-w-[280px] md:w-[180px] h-[40px] mx-auto font-bold text-white rounded-full disabled:bg-disabled-purple disabled:border-transparent"
                                        >
                                            Get A Quote
                                        </button>
                                    </div>
                                </div>
                                <div className="h-20 mt-2">
                                    <div className="transition-[height] duration-500 ease-in-out pointer-events-none overflow-hidden h-0 invisible">
                                        <svg width="5" height="147" className="mx-auto undefined" viewBox="0 0 5 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="2.5" y1="2.5" x2="2.49999" y2="144.5" stroke="#6211CB" strokeWidth="5" strokeLinecap="round" strokeDasharray="3 20"></line>
                                        </svg>
                                    </div>
                                </div>
                                <div id="quote-summary" className="transition-all duration-300 scroll-mb-[500px] scroll-pb-[500px] opacity-0 -translate-y-[20%] invisible">
                                    <div className="bg-white rounded-xl">
                                        <div className="px-8 pt-6">
                                            <p className="px-4 sm:px-8 pb-8 text-center">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-[24px] inline-block self-center stroke-dark-purple mb-1"
                                                >
                                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                </svg>
                                                <br />
                                                Your package is very heavy/large, please check that your stated dimensions are correct or contact our customer service by

                                                <a href="https://wa.me/6591187971" className="text-dark-purple" target="_blank" rel="noopener noreferrer" tabindex="-1">WhatsApp</a>
                                                for a custom quote
                                            </p>
                                        </div>
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