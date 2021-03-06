import React from 'react'
import "./Sales_And_Distributors.css"

function Sales_And_Distributors(props) {
    return (
          
          <div className='person_info w-100 '>
        
                <p id='SUBSIDIARIES'>{props.subsidiaries}</p>
                <p id='company_name'><b>{props.companyName}</b></p><br/>
                <p id='address'>{props.address}</p><br/>
                <p id='Functions'><b>FUNCTION:</b>{props.functions}<br/><b>BUSINESS AREA:</b>{props.businessArea}</p>
                <hr/>
                <p id='number'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg> {props.number}
                </p>
                <p id='gmail'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                    </svg><a href='/'>{props.gmail}</a>
                </p>

            </div>
    )
}

export default Sales_And_Distributors
