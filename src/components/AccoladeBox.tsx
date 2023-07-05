import { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD
<<<<<<< HEAD
import "@uploadthing/react/styles.css";
import { OurFileRouter } from "~/server/uploadthing";
import { UploadButton } from "~/utils/uploadthing";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Page from "~/pages/sign-in/[[...index]]";
=======
import { url } from "inspector";
import { UploadButton } from "@uploadthing/react";

>>>>>>> baa6929 (emwo)
=======
import { UploadButton } from "@uploadthing/react";
import "@uploadthing/react/styles.css";
import { OurFileRouter } from "~/server/uploadthing";
>>>>>>> 7749313 (meow)

const AccoladeBox = () => {
  
  interface FormData {
    institution: string,
    name: string,
    comments: string
    outcome: string
    intSource: string
    extSource: string
    messaging: string
    frequency: string
    notifDate: string
    cmcontact: string
    sourceatr: string
    wherepubint: string
    promotionlim: string
<<<<<<< HEAD
<<<<<<< HEAD
    imgurl: string
=======
>>>>>>> baa6929 (emwo)
=======
    imgurl: string
>>>>>>> 7749313 (meow)
  }  
  const notify = () => toast.success('Form submission was successful!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const [page, setPage] = useState(1)

  const [form, setForm] = useState<FormData>({institution: '', name: '', comments: '', outcome: '', intSource: '', extSource: '',
messaging: '', frequency: '', notifDate: '', cmcontact: '', sourceatr: '', wherepubint: '', promotionlim: '', imgurl:''})


  async function create(data: FormData) { 
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      await fetch("http://localhost:3000/api/create",{
=======
      await fetch('https://please-work-beta.vercel.app/api/create',{
>>>>>>> d8678dd (meow)
=======
      await fetch("http://localhost:3000/api/create",{
>>>>>>> baa6929 (emwo)
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'Application/json'},
        method: 'POST'});
    }
    catch (error) {
      console.log('error in POST request()')
    }
    (()=> setForm({institution: '', name: '', comments: '', outcome: '', intSource: '', extSource: '',
    messaging: '', frequency: '', notifDate: '', cmcontact: '', sourceatr: '', wherepubint: '', promotionlim: '', imgurl: ''}))
  }

  async function handleSubmit (data: FormData) {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      await create(data);
=======
      {create(data);}
>>>>>>> b443b1c (meowow)
=======
      await create(data);
>>>>>>> 36c7183 (Changed "handleSumit" async function)
      notify()
    } catch (error) {
      console.log('error in handleSubmit')
    }
  }

  return(
        <>
          <AnimatePresence>
            <motion.div className="flex fixed z-10 min-h-screen w-screen flex-col items-center bg-black/50 ">
              <motion.div
<<<<<<< HEAD
              className={'flex w-200 flex-col z-20 rounded-2xl m-4 items-center justify-center bg-slate-100'}>
=======
              className={`flex w-236 flex-col z-20 rounded-2xl m-4 items-center justify-center bg-slate-100`}>
>>>>>>> aa38aee (meow)
                <div className="flex flex-col pt-2 items-center justify-center">
                <h1 className="font-bentonbold text-[#541A83] text-4xl py-4 ">Create an Accolade</h1>

                <form onSubmit = {e => { e.preventDefault(); handleSubmit(form)}}
                 className="flex flex-col items-center justify-center w-200">
                  
                  <div className="grid grid-cols-2 gap-3 p-5">
<<<<<<< HEAD
                  
                  {(page == 1) && (
                  <>
=======
>>>>>>> 11078ab (styleing)
                  <input 
                  type="text" name="institution" value={form.institution} onChange ={e=> setForm({...form, institution: e.target.value})} className= "p-3 rounded-xl w-96" placeholder="Institution name">
                  </input>

                  <input 
                  type="text" name="accolade" value={form.name} onChange ={e=> setForm({...form, name: e.target.value})}
                  className= "p-3 rounded-xl w-96" placeholder="Accolade name">
                  </input>

                  <input 
                  type="text" name="outcome" value={form.outcome} onChange ={e=> setForm({...form, outcome: e.target.value})}
                  className= "p-3 rounded-xl w-96" placeholder="Related Outcome">
                  </input>

                  <input 
                  type="text" name="intSource" value={form.intSource} onChange ={e=> setForm({...form, intSource: e.target.value})}
                  className= "p-3 rounded-xl w-96" placeholder="Internal Source, Contact & Approvals">
<<<<<<< HEAD
=======
                  </input>

                  <input 
                  type="text" name="extSource" value={form.extSource} onChange ={e=> setForm({...form, extSource: e.target.value})}
                  className= "p-3 rounded-xl w-96" placeholder="External Source & Contact">
>>>>>>> 91d866e (meow)
                  </input>

                  <input 
                  type="text" name="frequency" value={form.frequency} onChange ={e=> setForm({...form, frequency: e.target.value})}
                  className= "p-3 rounded-xl w-96" placeholder="Frequency">
                  </input>

                  <input 
                  type="text" name="notifDate" value={form.notifDate} onChange ={e=> setForm({...form, notifDate: e.target.value})}
                  className= "p-3 rounded-xl w-96" placeholder="Notification Date">
                  </input>

                  <input 
                  type="text" name="cmcontact" value={form.cmcontact} onChange ={e=> setForm({...form, cmcontact: e.target.value})}
                  className= "p-3 rounded-xl w-96" placeholder="C&M Service Line Contact">
                  </input>
                  
                  <input 
                  type="text" name="sourceatr" value={form.sourceatr} onChange ={e=> setForm({...form, sourceatr: e.target.value})}
                  className= "p-3 rounded-xl w-96" placeholder="Source Attribution">
                  </input>

                  </>
                  )}

                  {(page == 2) && (
                  <>

                  <input 
                  type="text" name="wherepubint" value={form.wherepubint} onChange ={e=> setForm({...form, wherepubint: e.target.value})}
                  className= "p-3 rounded-xl w-96" placeholder="Where published internally?">
                  </input>

                  <input 
                  type="text" name="promotionlim" value={form.promotionlim} onChange ={e=> setForm({...form, promotionlim: e.target.value})}
                  className= "p-3 rounded-xl w-96" placeholder="Limitations on Promotion">
                  </input>

                  <div className="flex flex-col items-center justify-center">
                    <button type="button" className="bg-white text-xl text-[#541A83]  py-4 m-1 w-96 rounded-2xl">Upload an Image</button>
                  </div>

                  <textarea 
                  name="extSource" value={form.extSource} onChange ={e=> setForm({...form, extSource: e.target.value})}
                  className= "p-3 rounded-xl h-48 w-96" placeholder="External Source & Contact">
                  </textarea>

                  <textarea 
                  name="messaging" value={form.messaging} onChange ={e=> setForm({...form, messaging: e.target.value})}
                  className= "p-3 rounded-xl h-48 w-96" placeholder="Enter messaging">
                  </textarea>

                  <textarea 
                  name="comments" value={form.comments} onChange ={e=> setForm({...form, comments: e.target.value})}
                  className= "p-3 rounded-xl h-48 w-96" placeholder="Enter any comments">
                  </textarea>
                  </>
                  )}
                  </div>
                  <div className="w-200 flex flex-row justify-end px-10">
                  <div className="flex flex-row justify-between">
                    <div className="h-7 w-7 hover: cursor-pointer" onClick={() =>{setPage(1)}}><ChevronLeftIcon/></div><div className="font-bentonreg text-lg">Page {page}</div><div className="h-7 w-7 hover: cursor-pointer" onClick={() =>{setPage(2)}}><ChevronRightIcon/></div>
                  </div>
                </div>

                  <UploadButton<OurFileRouter>
                    endpoint="imageUploader"
<<<<<<< HEAD
<<<<<<< HEAD
                    onClientUploadComplete={(res:any) => {
                      // Do something with the response
                      const response = (res[0])
                      setForm({...form, imgurl: response.fileUrl})
                      console.log(form)
=======
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      console.log("Files: ", res);
>>>>>>> baa6929 (emwo)
=======
                    onClientUploadComplete={(res:any) => {
                      // Do something with the response
                      const response = (res[0])
                      setForm({...form, imgurl: response.fileUrl})
                      console.log(form)
>>>>>>> 7749313 (meow)
                      alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                  <button type="submit" onClick={() => handleSubmit} className="bg-[#541A83] font-bentonbold text-xl text-white py-2 m-4 w-64 rounded-3xl">Submit</button>
                  
                  <ToastContainer 
                  position="top-center"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  />
                </form>
                </div>
                </motion.div>
              <div>
            </div>
            </motion.div>
            </AnimatePresence>
        </>
        
  );}

export default AccoladeBox;