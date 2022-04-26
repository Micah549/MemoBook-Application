import React, { Component, useEffect,useState} from 'react';
import Navbar from '../routes/Navbar';
import '../themes/Memo.css';
import Footer from '../Components/Footer';

export default function Memo() {
	   	   //var //function
	
	const[body,setBody]=useState("");
	const[memoArray,setMemo]= useState([]);
	const[newTextMemo,setNewMemo]=useState("");
	

	useEffect(() => {},[memoArray]);


	function updateMemo(index){

	let duplicateMemo= memoArray;
	
	duplicateMemo[index]=newTextMemo;
	
	setNewMemo(duplicateMemo);
	}

	const removeMemo = (index)=>{
		var newMemoArray= memoArray.filter((arr,i)=> i !== index);
		setMemo(newMemoArray);
	}
	

	return (
		
		<div className=""> 
			<Navbar/>
			<div>

				<div className='container'>
					<h1>Memo</h1>
	
			
					<ol>
						{memoArray.map((memo, index) => {
							return (
							<li className="list-Items" key= {index}>
							{memo}
							<br/>
							{/*Edit Memo/ Updating Memo  */}
						<label htmlFor="TextArea">Edit memo</label>
							<p><textarea type='text' value={newTextMemo} onChange={(e)=>{setNewMemo(e.target.value)}}></textarea></p>			
			
						<button onClick={()=>{updateMemo(index); setBody("");}} >Submit Changes</button>
						<button onClick={()=>{removeMemo(index);setBody('');}}>Remove memo</button>

						<br/>
	

					</li>
				);//end return
				
				})}
					</ol>	

			 <br/>
			 {/* Text area */}
			 
				 <label>Start your Journal Here:<br/><br/></label>
				 <label htmlFor="TextArea">Description</label>
					<p><textarea type='text' value={body} onChange={(e)=>{setBody(e.target.value);}}></textarea></p>
				<button onClick={()=>{setMemo([...memoArray,body]); setBody("");}}>Add Memo</button>
			<br/>

			{/* ######################################### */}
			

					</div>
			</div>
		</div>
						
	);
}