import React, { useState } from 'react';
import { GoLocation } from "react-icons/go"
import { FaCarSide } from "react-icons/fa"
const Checkout = () => {
  const [selected, setSelected] = useState('');
  return (
    <div className='bg-background-gray py-16 md:pl-16 md:pr-12 min-h-screen md:min-h-[80vh] '>
      <div className='max-w-5xl mx-auto'>
        <div className='md:grid grid-cols-[68%_32%] gap-x-12 relative'>
          <div className='bg-white rounded-xl py-4'>
            <div className='w-[85%] md:w-[75%] lg:w-[65%] mx-auto text-sm '>
              <p className="font-bold text-2xl text-center">How would you like JustShip to <br /> collect your parcel?</p>
              <div className="flex flex-wrap my-8 justify-center gap-6 md:gap-8 ">
                {/* <label for="pickup-button" hidden="">pickup button</label> */}
                <button type="button" id="pickup-button" className={`pill-button button-hover flex justify-center items-center group w-[140px] lg:w-[160px] h-[40px] ${selected === 'pickup' ? 'bg-light-purple  text-white' : ''}`} onClick={() => setSelected('pickup')}>
                  <svg width="34" height="24" className="fill-white" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_706_1412)">
                      <path d="M13.439 6.81513C13.439 6.69011 13.4377 6.59414 13.439 6.49817C13.455 5.12808 13.4625 3.75799 13.4959 2.38789C13.5045 2.04442 13.5293 1.67696 13.6542 1.36379C13.9956 0.511432 14.6784 0.029058 15.5555 0.018956C18.4055 -0.0138758 21.2568 0.00254008 24.1081 0.0277953C25.1311 0.0366346 25.9983 0.516483 26.717 1.21731C27.3812 1.86385 27.9688 2.59246 28.5935 3.28193C29.4136 4.18985 30.2375 5.09525 31.0588 6.00191C31.5858 6.58404 32.2464 6.87827 32.9985 7.05C35.2708 7.56899 37.4987 8.23447 39.6004 9.2813C40.2894 9.62477 40.9376 10.0314 41.4658 10.6122C41.7651 10.9418 42.0014 11.2967 42.0001 11.7715C41.9952 13.6871 41.9779 15.6039 41.9989 17.5195C42.0088 18.411 40.7866 19.6523 39.8502 19.6725C39.2886 19.6852 38.7283 19.7268 38.1667 19.7231C37.8945 19.7205 37.7783 19.8001 37.6991 20.0804C37.1944 21.8862 36.0712 23.1338 34.332 23.7437C31.7367 24.6541 28.7729 23.0517 27.9849 20.3494C27.8031 19.7268 27.8031 19.7268 27.1586 19.7268C22.9565 19.7268 18.7531 19.7306 14.551 19.7193C14.2739 19.718 14.1836 19.8102 14.1144 20.0665C13.5317 22.2069 12.1525 23.5214 10.0236 23.9053C7.58174 24.346 5.24256 22.8572 4.43603 20.4592C4.40511 20.3658 4.37542 20.2724 4.34573 20.1789C4.21213 19.7369 4.21213 19.7407 3.74578 19.7306C3.24603 19.7205 2.74628 19.7041 2.24653 19.6852C1.52907 19.6587 0.950153 19.3291 0.472669 18.8063C0.18321 18.4893 0.0137407 18.1042 0.0137407 17.6635C0.0125037 15.0572 -0.0246065 12.4508 0.0285847 9.84575C0.0656949 8.05389 1.25446 6.90226 3.01966 6.87953C6.37071 6.83533 9.72175 6.83407 13.074 6.81513C13.1866 6.81386 13.2979 6.81513 13.439 6.81513ZM17.3516 8.57289C17.3516 8.57794 17.3516 8.58299 17.3516 8.58678C15.9216 8.58678 14.4916 8.58047 13.0617 8.58804C9.64877 8.60446 6.23711 8.63097 2.82422 8.6436C2.49517 8.64487 2.25643 8.78251 2.04119 9.0098C1.78884 9.27625 1.68617 9.59951 1.68493 9.96319C1.67133 12.3536 1.65153 14.7453 1.64906 17.1357C1.64782 17.7241 1.83214 17.9072 2.40611 17.9375C2.87864 17.9628 3.35365 17.9565 3.82619 17.9602C4.22327 17.964 4.21708 17.959 4.33336 17.5751C4.93949 15.5799 6.22103 14.2793 8.2225 13.8209C10.8103 13.2287 13.4018 14.9183 14.1119 17.6092C14.1849 17.8845 14.2863 17.9691 14.5683 17.9678C18.815 17.9577 23.0604 17.9602 27.307 17.9602C27.8129 17.9602 27.8105 17.9602 27.949 17.4741C28.7716 14.5887 32.2055 12.418 35.5492 14.5609C36.6909 15.292 37.3886 16.3831 37.73 17.7077C37.7783 17.8971 37.8525 17.9703 38.0492 17.964C38.5576 17.9476 39.0672 17.9602 39.5756 17.9476C39.9529 17.9388 40.2374 17.6963 40.3252 17.3188C40.3624 17.1634 40.3834 17.0005 40.3883 16.8414C40.4044 16.3578 40.4242 15.8742 40.418 15.3918C40.4032 14.3361 40.376 13.2792 40.3463 12.2235C40.3364 11.875 40.1669 11.6111 39.87 11.4381C39.4049 11.1691 38.9522 10.8724 38.471 10.6388C36.8641 9.85838 35.1546 9.3861 33.445 8.91004C32.5296 8.65623 31.6155 8.55774 30.6692 8.56152C26.2296 8.58299 21.7912 8.57289 17.3516 8.57289ZM9.20963 22.1981C11.0849 22.3837 12.5891 20.5527 12.5632 18.8467C12.5322 16.8566 11.0775 15.4688 8.97337 15.4713C7.3232 15.4739 5.9192 17.0536 5.92167 18.906C5.92167 20.7939 7.32691 22.2006 9.20963 22.1981ZM32.808 22.2296C33.1543 22.1917 33.5279 22.2246 33.8446 22.1046C35.8028 21.3621 36.7577 19.2167 35.7459 17.2796C34.76 15.3893 32.7783 15.0319 31.2135 15.8489C29.8404 16.5662 29.1885 18.1913 29.5683 19.6814C29.9616 21.2232 31.2098 22.1943 32.808 22.2296ZM29.3901 6.8025C29.3406 6.73305 29.3196 6.69643 29.2924 6.66486C28.4042 5.62687 27.5148 4.58888 26.6267 3.55089C26.0354 2.8589 25.4082 2.20858 24.5596 1.84364C24.426 1.78682 24.2776 1.7401 24.1353 1.73757C23.1791 1.71484 22.2229 1.706 21.2667 1.69337C21.1913 1.69211 21.1146 1.70348 21.0391 1.70853C21.0391 3.4183 21.0391 5.10535 21.0391 6.80376C23.8199 6.8025 26.5809 6.8025 29.3901 6.8025ZM19.3456 6.80503C19.3568 6.74694 19.3679 6.71284 19.3679 6.67875C19.3692 5.08515 19.3679 3.49154 19.3729 1.89794C19.3741 1.71737 19.2887 1.6959 19.1465 1.69716C18.5676 1.70095 17.9887 1.69211 17.4097 1.70095C16.8407 1.70979 16.2692 1.71232 15.7014 1.75778C15.2697 1.79187 15.1646 1.91562 15.1547 2.35506C15.125 3.78703 15.1126 5.219 15.0953 6.65097C15.0953 6.70022 15.1151 6.74946 15.1275 6.80503C16.5389 6.80503 17.9305 6.80503 19.3456 6.80503Z" fill="currentColor">
                      </path>
                    </g>
                    <defs>
                      <clipPath id="clip0_706_1412">
                        <rect width="42" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ml-1">Pick Up</span>
                </button>
                {/* <label for="dropoff-button" hidden="">dropoff-button</label> */}
                <button type="button" id="dropoff-button" className={`pill-button button-hover flex justify-center items-center group w-[140px] lg:w-[160px] h-[40px] ${selected === 'dropoff' ? 'bg-light-purple  text-white' : ''}`} onClick={() => setSelected('dropoff')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" className="stroke-dark-purple mr-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg> Drop Off</button>
              </div>
              {selected === 'pickup' ? <Pickup /> : <Dropoff />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function Pickup() {
  return (
    <div className="group">
      <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" for="contact-person-mobile">Pickup contact's mobile</label>
      <div className="flex h-10 mt-1 mb-6 relative rounded-xl border focus-within:border-light-purple focus-within:shadow-border-focus border-border-dark-gray shadow-border"><div className="relative text-gray-4 text-sm">
        <label for="country-call-code" hidden="">country calling code</label>
        <select id="country-call-code" name="country-call-code" className="absolute w-full h-full opacity-0 disabled:bg-gray-2 cursor-pointer" tabindex="-1">
          <option value="" disabled=""></option>
        <option value="AF/+93">Afghanistan +93</option>
          <option value="AL/+355">Albania +355</option>
          <option value="DZ/+213">Algeria +213</option>
          <option value="AS/+1684">American Samoa +1684</option>
          <option value="AD/+376">Andorra +376</option>
          <option value="AO/+244">Angola +244</option>
          <option value="AI/+1264">Anguilla +1264</option>
          <option value="AG/+1268">Antigua &amp; Barbuda +1268</option>
          <option value="AR/+54">Argentina +54</option>
          <option value="AM/+374">Armenia +374</option>
          <option value="AW/+297">Aruba +297</option>
          <option value="AU/+61">Australia +61</option>
          <option value="AT/+43">Austria +43</option>
          <option value="AZ/+994">Azerbaijan +994</option>
          <option value="BS/+1242">Bahamas +1242</option>
          <option value="BH/+973">Bahrain +973</option>
          <option value="BD/+880">Bangladesh +880</option>
          <option value="BB/+1246">Barbados +1246</option>
          <option value="BY/+375">Belarus +375</option>
          <option value="BE/+32">Belgium +32</option>
          <option value="BZ/+501">Belize +501</option>
          <option value="BJ/+229">Benin +229</option>
          <option value="BM/+1441">Bermuda +1441</option>
          <option value="BT/+975">Bhutan +975</option>
          <option value="BO/+591">Bolivia +591</option>
          <option value="BQ/+5997">Bonaire +5997</option>
          <option value="BA/+387">Bosnia and Herzegovina +387</option>
          <option value="BW/+267">Botswana +267</option>
          <option value="BR/+55">Brazil +55</option>
          <option value="BN/+673">Brunei +673</option>
          <option value="BG/+359">Bulgaria +359</option>
          <option value="BF/+226">Burkina Faso +226</option>
          <option value="BI/+257">Burundi +257</option>
          <option value="KH/+855">Cambodia +855</option>
          <option value="CM/+237">Cameroon +237</option>
          <option value="CA/+1">Canada +1</option>
          <option value="CV/+238">Cape Verde +238</option>
          <option value="KY/+1345">Cayman Islands +1345</option>
          <option value="TD/+235">Chad +235</option>
          <option value="CL/+56">Chile +56</option>
          <option value="CN/+86">China +86</option>
          <option value="CO/+57">Colombia +57</option>
          <option value="CG/+242">Congo +242</option>
          <option value="CK/+682">Cook Islands +682</option>
          <option value="CR/+506">Costa Rica +506</option>
          <option value="HR/+385">Croatia +385</option>
          <option value="CW/+5999">Curacao +5999</option>
          <option value="CY/+357">Cyprus +357</option>
          <option value="CZ/+420">Czech Republic +420</option>
          <option value="CD/+243">Democratic Republic of the Congo +243</option>
          <option value="DK/+45">Denmark +45</option>
          <option value="DJ/+253">Djibouti +253</option>
          <option value="DM/+1767">Dominica +1767</option>
          <option value="DO/+1849">Dominican Republic +1849</option>
          <option value="TL/+670">East Timor +670</option>
          <option value="EC/+593">Ecuador +593</option>
          <option value="EG/+20">Egypt +20</option>
          <option value="SV/+503">El Salvador +503</option>
          <option value="ER/+291">Eritrea +291</option>
          <option value="EE/+372">Estonia +372</option>
          <option value="SZ/+268">Eswatini +268</option>
          <option value="ET/+251">Ethiopia +251</option>
          <option value="FO/+298">Faroe Islands +298</option>
          <option value="FJ/+679">Fiji +679</option>
          <option value="FI/+358">Finland +358</option>
          <option value="FR/+33">France +33</option>
          <option value="GF/+594">French Guiana +594</option>
          <option value="PF/+689">French Polynesia +689</option>
          <option value="GA/+241">Gabon +241</option>
          <option value="GM/+220">Gambia +220</option>
          <option value="GE/+995">Georgia +995</option>
          <option value="DE/+49">Germany +49</option>
          <option value="GH/+233">Ghana +233</option>
          <option value="GI/+350">Gibraltar +350</option>
          <option value="GR/+30">Greece +30</option>
          <option value="GL/+299">Greenland +299</option>
          <option value="GD/+1473">Grenada +1473</option>
          <option value="GP/+590">Guadeloupe +590</option>
          <option value="GU/+1671">Guam +1671</option>
          <option value="GT/+502">Guatemala +502</option>
          <option value="GN/+224">Guinea +224</option>
          <option value="GY/+592">Guyana +592</option>
          <option value="HT/+509">Haiti +509</option>
          <option value="HN/+504">Honduras +504</option>
          <option value="HK/+852">Hong Kong +852</option>
          <option value="HU/+36">Hungary +36</option>
          <option value="IS/+354">Iceland +354</option>
          <option value="IN/+91">India +91</option>
          <option value="ID/+62">Indonesia +62</option>
          <option value="IQ/+964">Iraq +964</option>
          <option value="IE/+353">Ireland +353</option>
          <option value="IL/+972">Israel +972</option>
          <option value="IT/+39">Italy +39</option>
          <option value="CI/+225">Ivory Coast / Cote d'Ivoire +225</option>
          <option value="JM/+1876">Jamaica +1876</option>
          <option value="JP/+81">Japan +81</option>
          <option value="JO/+962">Jordan +962</option>
          <option value="KZ/+77">Kazakhstan +77</option>
          <option value="KE/+254">Kenya +254</option>
          <option value="KW/+965">Kuwait +965</option>
          <option value="KG/+996">Kyrgyzstan +996</option>
          <option value="LA/+856">Laos +856</option>
          <option value="LV/+371">Latvia +371</option>
          <option value="LB/+961">Lebanon +961</option>
          <option value="LS/+266">Lesotho +266</option>
          <option value="LR/+231">Liberia +231</option>
          <option value="LY/+218">Libya +218</option>
          <option value="LI/+423">Liechtenstein +423</option>
          <option value="LT/+370">Lithuania +370</option>
          <option value="LU/+352">Luxembourg +352</option>
          <option value="MO/+853">Macau +853</option>
          <option value="MK/+389">Macedonia +389</option>
          <option value="MG/+261">Madagascar +261</option>
          <option value="MW/+265">Malawi +265</option>
          <option value="MY/+60">Malaysia +60</option>
          <option value="MV/+960">Maldives +960</option>
          <option value="ML/+223">Mali +223</option>
          <option value="MT/+356">Malta +356</option>
          <option value="MH/+692">Marshall Islands +692</option>
          <option value="MQ/+596">Martinique +596</option>
          <option value="MR/+222">Mauritania +222</option>
          <option value="MU/+230">Mauritius +230</option>
          <option value="MX/+52">Mexico +52</option>
          <option value="FM/+691">Micronesia +691</option>
          <option value="MD/+373">Moldova +373</option>
          <option value="MC/+377">Monaco +377</option>
          <option value="MN/+976">Mongolia +976</option>
          <option value="ME/+382">Montenegro +382</option>
          <option value="MS/+1664">Montserrat +1664</option>
          <option value="MA/+212">Morocco +212</option>
          <option value="MZ/+258">Mozambique +258</option>
          <option value="NA/+264">Namibia +264</option>
          <option value="NP/+977">Nepal +977</option>
          <option value="NL/+31">Netherlands +31</option>
          <option value="AN/+599">Netherlands Antilles +599</option>
          <option value="NC/+687">New Caledonia +687</option>
          <option value="NZ/+64">New Zealand +64</option>
          <option value="NI/+505">Nicaragua +505</option>
          <option value="NE/+227">Niger +227</option>
          <option value="NG/+234">Nigeria +234</option>
          <option value="MP/+1670">Northern Mariana Islands +1670</option>
          <option value="NO/+47">Norway +47</option>
          <option value="OM/+968">Oman +968</option>
          <option value="PK/+92">Pakistan +92</option>
          <option value="PW/+680">Palau +680</option>
          <option value="PS/+970">Palestine +970</option>
          <option value="PA/+507">Panama +507</option>
          <option value="PG/+675">Papua New Guinea +675</option>
          <option value="PY/+595">Paraguay +595</option>
          <option value="PE/+51">Peru +51</option>
          <option value="PH/+63">Philippines +63</option>
          <option value="PL/+48">Poland +48</option>
          <option value="PT/+351">Portugal +351</option>
          <option value="QA/+974">Qatar +974</option>
          <option value="RO/+40">Romania +40</option>
          <option value="RU/+7">Russia +7</option>
          <option value="RW/+250">Rwanda +250</option>
          <option value="KN/+1869">Saint Kitts and Nevis +1869</option>
          <option value="LC/+1758">Saint Lucia +1758</option>
          <option value="SX/+1721">Saint Maarten +1721</option>
          <option value="MF/+590">Saint Martin +590</option>
          <option value="VC/+1784">Saint Vincent and the Grenadines +1784</option>
          <option value="WS/+685">Samoa +685</option>
          <option value="SA/+966">Saudi Arabia +966</option>
          <option value="SN/+221">Senegal +221</option>
          <option value="RS/+381">Serbia +381</option>
          <option value="SC/+248">Seychelles +248</option>
          <option value="SG/+65">Singapore +65</option>
          <option value="SK/+421">Slovakia +421</option>
          <option value="SI/+386">Slovenia +386</option>
          <option value="ZA/+27">South Africa +27</option>
          <option value="KR/+82">South Korea +82</option>
          <option value="ES/+34">Spain +34</option>
          <option value="LK/+94">Sri Lanka +94</option>
          <option value="SR/+597">Suriname +597</option>
          <option value="SE/+46">Sweden +46</option>
          <option value="CH/+41">Switzerland +41</option>
          <option value="SY/+963">Syrian Arab Republic +963</option>
          <option value="TW/+886">Taiwan +886</option>
          <option value="TZ/+255">Tanzania, United Republic of Tanzania +255</option>
          <option value="TH/+66">Thailand +66</option>
          <option value="TG/+228">Togo +228</option>
          <option value="TO/+676">Tonga +676</option>
          <option value="TT/+1868">Trinidad and Tobago +1868</option>
          <option value="TN/+216">Tunisia +216</option>
          <option value="TR/+90">Turkey +90</option>
          <option value="TC/+1649">Turks and Caicos Islands +1649</option>
          <option value="UG/+256">Uganda +256</option>
          <option value="UA/+380">Ukraine +380</option>
          <option value="AE/+971">United Arab Emirates +971</option>
          <option value="GB/+44">United Kingdom +44</option>
          <option value="US/+1">United States +1</option>
          <option value="UY/+598">Uruguay +598</option>
          <option value="UZ/+998">Uzbekistan +998</option>
          <option value="VU/+678">Vanuatu +678</option>
          <option value="VE/+58">Venezuela +58</option>
          <option value="VN/+84">Vietnam +84</option>
          <option value="VG/+1284">Virgin Islands, British +1284</option>
          <option value="VI/+1340">Virgin Islands, U.S. +1340</option>
          <option value="WF/+681">Wallis and Futuna +681</option>
          <option value="YE/+967">Yemen +967</option>
          <option value="ZM/+260">Zambia +260</option>
          <option value="ZW/+263">Zimbabwe +263</option>
        </select><div className="h-full flex items-center min-w-[40px] px-3 justify-center" aria-hidden="true">+65
        </div>
      </div>
      <hr className="h-2/3 self-center border-l border-border-gray group-focus-within:border-light-purple" />
          <input type="tel" id="contact-person-mobile" className="block w-full pl-3 pr-10 py-2.5 text-gray-4 disabled:bg-gray-2 text-sm rounded-xl focus:outline-none" value="32259433"/>
          <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-[18px] inline-block absolute right-0.5 top-[50%] -translate-y-[50%] group-focus-within:invisible mr-2 stroke-dark-purple"><circle r="10" transform="matrix(1 0 0 -1 11 11)" strokeWidth="2">
      </circle><path d="M6 11.9375L9.04348 15L16 8" strokeWidth="2" strokeLinecap="round">
        </path>
      </svg><p className="min-h-[1rem] text-xs text-error-red absolute top-10"></p>
    </div>
    </div>
  )
}

function Dropoff() {
  return <p>This is the dropoff component</p>;
}

export default Checkout;