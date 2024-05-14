import React, { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Reminder from './Reminder';
import ReminderAll from './ReminderAll';

const SpeechTranscript = () => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition, listening } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [timer, setTimer] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [stoppedTime, setStoppedTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [lastAttempt, setLastAttempt] = useState(null);
  const [totalAttempts, setTotalAttempts] = useState(0); // New state for total attempts
  const [totalSpeakTime, setTotalSpeakTime] = useState(0);
  const [showReminderDrawer, setShowReminderDrawer] = useState(false); // State for managing reminder drawer visibility

  useEffect(() => {
    if (isListening) {
      SpeechRecognition.startListening({ continuous: true });
      resetTimeout();
    } else {
      SpeechRecognition.stopListening();
    }

    return () => {
      SpeechRecognition.abortListening();
      clearTimeout(timeoutId);
    };
  }, [isListening]);

  useEffect(() => {
    fetchLastAttempt();
    fetchTotalSpeakTime();
    fetchTotalAttempts(); // Fetch total attempts when the component mounts
  }, []);

  const resetTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      setIsListening(false);
      setShowNotification(true);
    }, 50000); // Adjust the timeout period as needed
    setTimeoutId(id);
  };

  const handleStart = () => {
    setIsListening(true);
    setTimer(0); // Reset timer when starting listening
    setShowNotification(false); // Hide notification when starting new session
  };

  const handleStop = () => {
    setIsListening(false);
    setStoppedTime(new Date().toLocaleTimeString());
    setShowNotification(true); // Show notification when stopping listening
    clearTimeout(timeoutId); // Clear timeout when stopping listening
  };

  const handleReset = () => {
    resetTranscript();
    setTimer(0);
    setShowNotification(false); // Hide notification when resetting
  };

  useEffect(() => {
    let interval;
    if (isListening) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isListening]);

  useEffect(() => {
    const dateInterval = setInterval(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString());
    }, 1000);
    return () => clearInterval(dateInterval);
  }, []);


  const handleAllow = async () => {
    setShowNotification(false);
    try {
      const response = await fetch('http://localhost:3000/transcript/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: currentDate,
          stoppedTime: stoppedTime,
          speakingTime: timer
        })
      });
      if (response.ok) {
        console.log('Transcript saved successfully!');
        await fetchLastAttempt();
        await fetchTotalSpeakTime(); // Fetch total speak time after saving transcript
        await fetchTotalAttempts(); // Fetch total attempts after saving transcript
      } else {
        console.error('Failed to save transcript.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchLastAttempt = async () => {
    try {
      const response = await fetch('http://localhost:3000/transcript/last');
      if (response.ok) {
        const data = await response.json();
        setLastAttempt(data);
      } else {
        console.error('Failed to fetch last attempt.');
      }
    } catch (error) {
      console.error('Error:', error);
    }{
      resetTranscript();
      setTimer(0);
    }
  };

  // Function to fetch total attempts from backend
  const fetchTotalAttempts = async () => {
    try {
      const response = await fetch('http://localhost:3000/transcript/all');
      if (response.ok) {
        const data = await response.json();
        setTotalAttempts(data.length); // Set total attempts count
      } else {
        console.error('Failed to fetch total attempts.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // Function to fetch the total speak time from the backend
  const fetchTotalSpeakTime = async () => {
    try {
      const response = await fetch('http://localhost:3000/transcript/total-speak-time');
      if (response.ok) {
        const data = await response.json();
        setTotalSpeakTime(data);
      } else {
        console.error('Failed to fetch total speak time.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Calculate average speak time per attempt
  const averageSpeakTime = totalAttempts ? Math.round(totalSpeakTime / totalAttempts) : 0;

  const handleCancel = () => {
    setShowNotification(false);
    resetTranscript();
    setTimer(0);
  };

  const toggleReminderDrawer = () => {
    setShowReminderDrawer(!showReminderDrawer); // Toggle reminder drawer visibility
  };


  if (!browserSupportsSpeechRecognition) {
    return <div className="text-center text-red-600 mt-4">Browser doesn't support speech recognition.</div>;
  }

  return (
    <div>
      <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" className="absolute top-0 left-0 min-h-full ob" alt="" />
        <div className="relative z-10 max-w-screen-lg mx-auto grid grid-cols h-full items-center mt-20 mb-20 text-center">
          <div className="col-span-6">
          <h1 className="text-red-300 font-extrabold text-6xl mb-8"> Improve Your Speaking Skills</h1>
            <h1 className="text-white font-extrabold text-4xl mb-8">Are you looking to enhance your English speaking abilities?</h1>
            <p className="text-stone-100 text-base">
            Ready to take your English speaking skills to the next level? Dive into our curated content, participate in discussions, and unleash your full potential as a confident English speaker. Join us on this exciting journey towards fluency!
            </p>
            <button
              className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10"
              onClick={() => {
                document.getElementById("progress-section").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      
          <div id="progress-section" className='grid md:grid-cols-3 gap-4 mb-10 text-center mt-6'>
                <div className=" bg-gray-50 dark:bg-gray-600  border border-gray-200 dark:border-gray-700 rounded-lg p-12">
                  <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-10">Total Speak Time</h1>
                  <p className="text-normal text-2xl font-normal text-gray-500 dark:text-gray-200 mb-10">{totalSpeakTime} Seconds </p> 
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-500 border border-gray-200 dark:border-gray-700 rounded-lg p-12">
                  <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-10">Average Speak Time</h1>
                  <p className="text-normal text-2xl font-normal text-gray-500 dark:text-gray-200 mb-10">{averageSpeakTime} seconds </p> 
                  
                </div>

                
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-12">
                  <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-10">Total Attempts</h1>
                  <p className="font-normal text-2xl text-gray-500 dark:text-gray-200 mb-10">{totalAttempts} attempts</p> 
                      
                </div>
          </div>


              <div className="bg-gray-200  shadow-lg container mx-auto p-4 max-w-4xl border rounded-xl mb-8 pl-16 pr-16">
                <h1 className="text-3xl font-bold mb-4 text-center">Start Your Speech here</h1>
                <div className='p-5'><h2 className='text-red-500 font-bold'>How It Works:</h2>
                      <p>
                      1) Start Speaking: Click "Start" to begin the session.<br/>
                      2) Speak Freely: Express yourself on any topic or engage in a provided prompt.<br/>
                      3) Transcript Display: Your speech is transcribed in real-time.<br/>
                      4) Stop Speaking: Click "Stop" to pause the transcription and end the session.<br/>
                      5) Review and Improve: Reflect on your transcript to identify areas for improvement and set goals for future practice.<br/></p></div>
                {lastAttempt && (
                  <div className="mb-3 dark:text-white text-center">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-12">
                      <p className="font-bold">Your Last Attempt:</p>
                      <p>Date: {new Date(lastAttempt.date).toLocaleDateString()}</p>
                      <p>Time: {lastAttempt.stoppedTime}</p>
                      <p>Total Spoke Time: {lastAttempt.speakingTime} seconds</p>
                    </div>
                  </div>
                )}
                <div className="flex justify-center items-center mb-4">
                  <p className="mr-2">Microphone:</p>
                  <span className={`rounded-full w-4 h-4 ${isListening ? 'bg-green-500' : 'bg-red-500'}`}></span>
                </div>
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <button onClick={handleStart} disabled={isListening} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Start
                  </button>
                  <button onClick={handleStop} disabled={!isListening} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                    Stop
                  </button>
                  <button onClick={handleReset} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
                    Reset
                  </button>
                </div>
                <div className="border border-gray-300 rounded p-4">
                  <p className="font-medium">Transcript:</p>
                  <p className="mt-2">{transcript}</p>
                </div>
                <div className="text-center mt-4">
                  <p className="text-lg font-bold">Timer: {timer} seconds</p>
                </div>
                {showNotification && (
                  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                    <div className="bg-white p-8 rounded shadow-lg">
                      <p className="text-lg font-bold mb-4">Your Speaking Time</p>
                      <p className="mb-2">Date: {currentDate}</p>
                      <p className="mb-2">Stopped Time: {stoppedTime}</p>
                      <p className="mb-4">You spoke for {timer} seconds. Do you accept this?</p>
                      <div className="flex justify-center space-x-4">
                        <button onClick={handleAllow} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                          Allow
                        </button>
                        <button onClick={handleCancel} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              

          <div className='grid md:grid-cols-2 gap-4 mb-10'>
                <div className="bg-gray-50  border dark:border-gray-700 rounded-lg p-12">
                <div className=" md:w-100"> {/* Adjust the width based on your requirement */}
                  <Reminder /> {/* Using the AddReminderForm component here */}
                </div>
                </div>
                




                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-12"> 
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-10">Your Reminders</h1>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-10"> Check you All reminders here </p> 
                  <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-12">
                  <button onClick={toggleReminderDrawer} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    {showReminderDrawer ? 'Hide All Reminders' : 'Show All Reminders'}
                  </button>
                  {/* Render the ReminderAll component conditionally based on visibility state */}
                  {showReminderDrawer && <ReminderAll />}
        </div>
                </div>   
          </div>


          <div className='grid md:grid-cols-3 gap-4 mb-10'>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-12"> 
                </div>
                
                <div className="bg-gray-50  border dark:border-gray-700 rounded-lg p-12 ">
                      
                </div>
                
                
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-12"> 

                </div>

                
                </div>










          

          


    </div>
  );
};

export default SpeechTranscript;




