import './InsurancePolicies.css'
import { useState } from 'react'
import Chip from '../components/Chip'
import React from 'react'

function InsurancePolicies() {
  const [policies, setPolicies] = useState(
    [
      {
        id: 1,
        icon: 'plane',
        type: { name: 'Travel', details: 'Europe, 1 person'},
        date: { start: '2019-04-20', end: '2020-04-21'},
        state: { name: 'Active', color: '', border: true},
        action: { name: 'Fill a claim' }
      },
      {
        id: 2,
        icon: 'home',
        type: { name: 'Private property', details: 'Zigfrīda Annas Meirovica bulvāris 10-0, Rīga'},
        date: { start: '2019-01-06', end: '2020-01-06'},
        state: { name: 'Unpaid', color: 'status red', border: false},
        action: { name: 'Pay', amount: '24,49', currency: '€' }
      },
      {
        id: 3,
        icon: 'car',
        type: { name: 'KASKO', details: 'Volvo XS60, FF-4224'},
        date: { start: '2018-05-12', end: '2019-05-12'},
        state: { name: 'Ending soon', color: 'infographic lightYellow', border: false},
        action: { name: 'Renew' }
      },
      {
        id: 4,
        icon: 'cat',
        type: { name: 'PET', details: 'Muris'},
        date: { start: '2019-05-12', end: '2019-05-12'},
        state: { name: 'Active', color: '', border: true},
        action: { name: 'Fill a claim' }
      },
      {
        id: 5,
        icon: 'health',
        type: { name: 'Health', details: 'Jānis Bērziņš, 010167-041258'},
        date: { start: '2019-05-12', end: '2020-05-12'},
        state: { name: 'Active', color: '', border: true},
        action: { name: 'Fill a claim' }
      },
      {
        id: 6,
        icon: 'smarthphone',
        type: { name: 'Smartphone', details: 'Samsung Galaxy S10'},
        date: { start: '2019-05-12', end: '2012-12-31'},
        state: { name: 'Ending soon', color: 'infographic lightYellow', border: false},
        action: { name: 'Renew' }
      }
    ]
  )
  const [showAll, setShowAll] = useState(false)
  const [policyInEdit, setPolicyInEdit] = useState(null)

  function customFormatDate (dateString) {
    const options = {
      year: "numeric",
      month:"short",
      day:"2-digit"
    }
    return new Date(dateString).toLocaleDateString("en-US",options)
  }
  function getInsurancePolicies () {
    if (showAll) {
      return policies
    } else {
      return policies.filter((p, i) => i < 4)
    }
  }
  function handlEditName (id, e) {
    const newPolicies = [...policies]
    const policyToEdit = policies.find(p => p.id === id)
    policyToEdit.type.details = e.target.value
    setPolicies(newPolicies)
    return newPolicies
  }
  function handlePressEnter (e) {
    if (e.key === 'Enter') {
      setPolicyInEdit(null)
    }
  }

  return (
    <div className="policy-wrapper">
      <h1 className="if heading medium font weight-126 heading-custom">Insurance Policies</h1>

      <table className="if table table-header-border">
        <tbody className="if">

          { getInsurancePolicies() && getInsurancePolicies().map((p, i) => 
            <tr className="if" key={i} data-testid='policy'>
              <td className="if" style={{width: '68px', paddingRight: 0}}>
                <div className={'if icon product policy-icon ' + p.icon} />
              </td>

              <td className="if" style={{width: '450px'}}>
                <div className="if font weight-126">{p.type.name}</div>
                <div>
                  { policyInEdit === p.id && (
                    <React.Fragment>
                      <input type="text" placeholder="Enter policy name" className="if text input-custom" value={p.type.details} onChange={(e) => handlEditName(p.id, e)} onKeyUp={handlePressEnter} />
                      <button className="if button icon ui check edit-custom" onClick={()=>{setPolicyInEdit(null)}}></button>
                    </React.Fragment>
                  ) || (
                    <React.Fragment>
                      <span>{p.type.details}</span> 
                      <button className="if button icon ui edit edit-custom" onClick={()=>{setPolicyInEdit(p.id)}}></button>
                    </React.Fragment>
                  )}
                </div>

              </td>

              <td className="if" style={{width: '200px'}}>
                <span className="date-custom">{customFormatDate(p.date.start)} - {customFormatDate(p.date.end)}</span>
              </td>

              <td className="if" style={{width: '182px', textAlign: 'right'}}>
                {Chip(p)}
              </td>

              <td className="if" style={{width: '200px'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <button className={'if button policy-button text meta ' + (p.action.amount ? 'primary' : 'color background darkBeige')}>{p.action.name} {p.action.amount}{p.action.currency}</button>
                  <button className={'if button policy-button-append ' + (p.action.amount ? 'primary' : 'color background darkBeige')}><span className={'if icon ui drop-down '  + (p.action.amount ? 'white' : 'brown')}></span></button>
                </div>
              </td>
            </tr>
          )}

        </tbody>
      </table>
  
      { !showAll && <button id="show-all-button" className="if button text show-all-custom" onClick={() => {setShowAll(!showAll)}}>See 2 more</button>}
    </div>
  )
}
export default InsurancePolicies