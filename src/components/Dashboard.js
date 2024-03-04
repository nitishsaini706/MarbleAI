import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


let buttonData = [{
    title: "Online store sessions", data: "255,581", inc: true, per: "9"
}, {
    title: "Net return value", data: "$15,07.44", inc: true, per: "14"
}, {
    title: "Total orders", data: " 10,511", inc:false, per: "11"
}, {
    title: "Conversion rate", data: "3.18%", inc: true, per: "7"
}]
const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  border:1px solid black;
  border-radius: 8px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction:column;
  width:250px;
  max-height:150px;
  font-family: 'Arial', sans-serif;
  
`;
const Title = styled.p`
  color: black;
  font-size: 17px;
  font-weight:700;
  min-width:150px;
  border-bottom:2px dashed grey;
  margin-right: 10px;
  overflow-x:scroll;
  white-space:nowrap;

`;

const Data = styled.div`
  color: black;
  font-weight:700;
  font-size: 20px;
  margin: 8px 0;
`;

const Change = styled.span`
  font-size: 18px;
  color: ${({ isPositive }) => (isPositive ? 'green' : 'red')};
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const DashboardComponent = ({ data, endDate, startDate, setStartDate, setEndDate,active,setActive }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [obj, setObj] = useState({});
    const [title, setTitle] = useState('');
    const [show, setShow] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const change = (index) => {
        setActive(index);
    }
    const testing = () => { 
        setShow(false); 

        buttonData.map((item,index)=>{
            if (index == active){
                item.title = title;
                
            }
        })
    }
    return (
        <>
            {show ? <Modal show={show} style={{top:100}}onHide={()=>setShow(false)} animation={false}>
        <Modal.Header >
                        <Modal.Title>Previous Title: {obj.title}</Modal.Title>
                    </Modal.Header>
         <Modal.Body>
                        <span>New Title: </span>
                        <input type='text' onChange={(e) => { setTitle(e.target.value) }} />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { setShow(false) }}>Close</Button>
                        <Button variant="primary" onClick={testing}>Save changes</Button>
                    </Modal.Footer>
      </Modal> : null}
        
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', margin: "20px"}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", marginBottom: "50px" }}>
                {buttonData.length ? buttonData.map((item, index) => 
                    (<Card style={{ backgroundColor: active !== index ? '#fff' : '#F1F1F1' }}
                        key={index} onClick={() => { change(index) }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>

                            <Title >{item.title}</Title>
                            <EditButton onClick={() => { setShow(true); setObj(item) }}>
                                <MdEdit size={20} />
                            </EditButton>
                        </div>
                        <Data>
                            {item.data} <Change isPositive={item.inc}>{item.inc ? "▲" : "▼"} {item.per}%</Change>
                        </Data>
                    </Card>)
                ) : null}
                {isVisible ? <TiArrowSortedDown size={30} onClick={toggleVisibility} /> : <TiArrowSortedUp size={30} onClick={toggleVisibility} />}
            </div>
            <div style={{display:"flex",justifyContent:"space-around",margin:"50px"}}>
                <div>

                <span>Start Date: </span>
                   <input type="date" placeholder='start Date' value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                </div>
                <div>
                <span>End Date: </span>
                        <input type="date" placeholder='end Date' value={endDate} onChange={(e)=>setEndDate(e.target.value)} />
                </div>

            </div>
            {isVisible && (
                <div >
                   
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                width={500}
                                height={300}
                                data={data} 
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="4 4" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="value" stroke="blue" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="prev" stroke="grey" strokeDasharray="5 5" /> {/* Additional line for oldData */}
                            </LineChart>
                        </ResponsiveContainer>
                        <div style={{ display: 'flex', flexDirection: "column", alignItems: "flex-end" ,marginRight:"100px",fontSize:"15px"} }>
                            <div style={{ width: "270px", height: "22px", display: "flex", alignItems: "center", backgroundColor:"#F6F6F7",borderRadius:"20px",padding:"10px" }}>
                                <div style={{ height: "2px", width: "40px", backgroundColor: "#489AD2", marginRight: "10px" }}></div>
                                <span style={{ maxWidth: "250px", color: "#676767" }}>{startDate} - {endDate}</span>
                            </div>                    </div>
                    </div>
            )}
        </div>
        </>
    );
};

export default DashboardComponent;
