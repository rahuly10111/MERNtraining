import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DataGrid } from '@mui/x-data-grid';
import { GetSupplierData } from '../Redux/Action/SupplierAction';


export default function DashBoard() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.getSupplier.supplierData);
  console.log("Dasboard State", state)

  const [supplierdata, setsupplierdata] = useState([]);
  const [monthdate, setmonthdate] = useState();

  useEffect(() => {
    dispatch(GetSupplierData());
  }, []);

  function ChangeTableValue(e) {
    setsupplierdata({ ...supplierdata, [e.target.name]: e.target.value });
  }

  function changeDate(e) {
    alert("sas", e.target.value)

  }
  console.log("dfdsfdsfg", monthdate);
  //console.log(moment().endOf('month').format("DD-MM-YYYY"))
  console.log()
  useEffect(() => {
    setsupplierdata(state)
  }, [state]
  )


  // const [data, setData] = useState([
  //   [{ value: "Vanilla" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }],
  //   [{ value: "Strawberry" }, { value: "Cookies" }, { value: "Chocolate" }, { value: "Chocolate" }],
  //   [{ value: "Vanilla" }, { value: "Chocolate" }, { value: "Chocolate" }, { value: "Chocolate" }],
  //   [{ value: "Strawberry" }, { value: "Cookies" }, { value: "Chocolate" }, { value: "Chocolate" }],
  // ]);



  return (
    <>

      {/* <Spreadsheet data={data} onChange={setData} /> */}


      <div class="row g-3 p-4 ">
        <p>Montly Invoice List </p>
        <div className="row">
          <label class="col-sm-2 col-form-label"> <b> Choose Month :</b></label>
          <div class="col">
            {/* <LocalizationProvider dateAdapter={AdapterDayjs} className="monthpicker" >
              <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                <DatePicker label={'"month" and "year"'} views={['month', 'year']} onChange={(e) => { changeDate(e) }} />
              </DemoContainer>
            </LocalizationProvider> */}
           
          </div>
        </div>
        <div className="row p-2">
          <label class="col-sm-2 col-form-label"> <b> Date :</b></label>
          <div class="col-4">

            <input type="date" class="form-control" placeholder="Last name" aria-label="Last name" value={monthdate} />
          </div>
          <label class="col-sm-2 col-form-label"> <b>  Invoice Reference :</b></label>
          <div class="col-4">
            <LocalizationProvider dateAdapter={AdapterDayjs} className="monthpicker" >
              <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                <DatePicker label={'"month" and "year"'} views={['month', 'year']} />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className="col threebutton">
          <button type="button" class="btn btn-primary btn-sm m-2">Email Invoices </button>
          <button type="button" class="btn btn-primary btn-sm m-2">Approves Invoices</button>
          <button type="button" class="btn btn-primary btn-sm m-2">Combine and Download</button>
        </div>
      </div>



      <hr />

      <>

        <div className="container p-4">

          <table className=" table suppliertable   border-dark  caption-top table-hover ">
            <caption>List of Supplier</caption>
            <thead>
              <tr>
                <th > <input className='inputcell' value="sr.no" /> </th>
                <th> <input className='inputcell' value="supplier" /> </th>
                <th> <input className='inputcell' value="hairServices" /> </th>
                <th > <input className='inputcell' value="beautyServices" />  </th>
                <th> <input className='inputcell' value="custom1" /> </th>
                <th  > <input className='inputcell' value="custom2" /> </th>
                <th > <input className='inputcell' value="custom3" /> </th>
                <th > <input className='inputcell' value="custom4" /> </th>
                <th > <input className='inputcell' value="Net" /> </th>
                <th  > <input className='inputcell' value="VAT" />  </th>
                <th > <input className='inputcell' value="Gross" /> </th>
                <th > <input className='inputcell' value="AdvancePaid" /> </th>
                <th > <input className='inputcell' value="balanceDue" /> </th>
              </tr>
            </thead>

            <tbody className=" table table-group-divider">
              {supplierdata.map((data, index) => (
                <tr key={index} >
                  <th > <input className='inputcell' value={index + 1} /> </th>
                  <td ><input className='inputcell' name='supplier' value={data?.supplier} onChange={ChangeTableValue} />  </td>
                  <td > <input className='inputcell' name='hair_services' value={data?.hair_services} onChange={ChangeTableValue} /> </td>
                  <td ><input className='inputcell' name='beauty_services' value={data?.beauty_services} onChange={ChangeTableValue} />  </td>
                  <td > <input className='inputcell' name='custom_1' value={data?.custom_1} onChange={ChangeTableValue} /> </td>
                  <td ><input className='inputcell' name='custom_2' value={data?.custom_2} onChange={ChangeTableValue} />  </td>
                  <td > <input className='inputcell' name='custom_3' value={data?.custom_3} onChange={ChangeTableValue} /> </td>
                  <td ><input className='inputcell' name='custom_4' value={data?.custom_4} onChange={ChangeTableValue} />  </td>
                  <td > <input className='inputcell' name='Net' value={data?.Net} onChange={ChangeTableValue} /> </td>
                  <td ><input className='inputcell' name='VAT' value={data?.VAT} onChange={ChangeTableValue} />  </td>
                  <td > <input className='inputcell' name='Gross' value={data?.Gross} onChange={ChangeTableValue} /> </td>
                  <td ><input className='inputcell' name='Advance_paid' value={data?.Advance_paid} onChange={ChangeTableValue} />  </td>
                  <td > <input className='inputcell' name='balance_due' value={data?.balance_due} onChange={ChangeTableValue} /> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>







      </>


    </>
  )
}
