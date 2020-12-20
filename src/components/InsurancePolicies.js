import './InsurancePolicies.css'
import { useState } from 'react'
import Chip from '../components/Chip'

function InsurancePolicies() {
  const [policies] = useState(
    [
      {
        icon: 'plane',
        type: { name: 'Travel', details: 'Europe, 1 person'},
        date: { start: '2019-04-20', end: '2020-04-21'},
        state: { name: 'Active', color: '', border: true},
        action: { name: 'Fill a claim' }
      },
      {
        icon: 'home',
        type: { name: 'Private property', details: 'Zigfrīda Annas Meirovica bulvāris 10-0, Rīga'},
        date: { start: '2019-01-06', end: '2020-01-06'},
        state: { name: 'Unpaid', color: 'status red', border: false},
        action: { name: 'Pay', amount: '24,49', currency: '€' }
      },
      {
        icon: 'car',
        type: { name: 'KASKO', details: 'Volvo XS60, FF-4224'},
        date: { start: '2018-05-12', end: '2019-05-12'},
        state: { name: 'Ending soon', color: 'infographic lightYellow', border: false},
        action: { name: 'Renew' }
      },
      {
        icon: 'cat',
        type: { name: 'PET', details: 'Muris'},
        date: { start: '2019-05-12', end: '2019-05-12'},
        state: { name: 'Active', color: '', border: true},
        action: { name: 'Fill a claim' }
      },
      {
        icon: 'health',
        type: { name: 'Health', details: 'Jānis Bērziņš, 010167-041258'},
        date: { start: '2019-05-12', end: '2020-05-12'},
        state: { name: 'Active', color: '', border: true},
        action: { name: 'Fill a claim' }
      },
      {
        icon: 'smarthphone',
        type: { name: 'Smartphone', details: 'Samsung Galaxy S10'},
        date: { start: '2019-05-12', end: '2012-12-31'},
        state: { name: 'Ending soon', color: 'infographic lightYellow', border: false},
        action: { name: 'Renew' }
      }
    ]
  )
  const [showAll, setShowAll] = useState(false)

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

  return (
    <div className="policy-wrapper">
      <h1 className="if heading medium font weight-126" style={{marginLeft: '12px'}}>Insurance Policies</h1>

      <table className="if table table-header-border">
        <tbody className="if">

          { getInsurancePolicies().map((p, i) => 
            <tr className="if" key={i}>
              <td className="if" style={{width: '68px', paddingRight: 0}}>
                <div className={'if icon product policy-icon ' + p.icon} />
              </td>

              <td className="if" style={{width: '450px'}}>
                <div className="if font weight-126">{p.type.name}</div>
                <div>{p.type.details}</div>
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
  
      { !showAll && <button className="if button text" onClick={() => {setShowAll(!showAll)}}>See 2 more</button>}
    </div>
  )
}
export default InsurancePolicies