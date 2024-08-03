import axios from 'axios';

// Action Types
export const FETCH_COMBINED_DATA_REQUEST = 'FETCH_COMBINED_DATA_REQUEST';
export const FETCH_COMBINED_DATA_SUCCESS = 'FETCH_COMBINED_DATA_SUCCESS';
export const FETCH_COMBINED_DATA_FAILURE = 'FETCH_COMBINED_DATA_FAILURE';
export const SUBMIT_CONTACT_FORM_REQUEST = 'SUBMIT_CONTACT_FORM_REQUEST';
export const SUBMIT_CONTACT_FORM_SUCCESS = 'SUBMIT_CONTACT_FORM_SUCCESS';
export const SUBMIT_CONTACT_FORM_FAILURE = 'SUBMIT_CONTACT_FORM_FAILURE';

// Helper function to fetch data
const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

// Fetch Combined Data Action
export const fetchCombinedData = () => async (dispatch) => {
  dispatch({ type: FETCH_COMBINED_DATA_REQUEST });
  try {
    const urls = [
      "https://digiatto.onrender.com/project",
      "https://digiatto.onrender.com/homeslider",
      "https://digiatto.onrender.com/whatwedo",
      "https://digiatto.onrender.com/weareexpert",
      "https://digiatto.onrender.com/awards",
      "https://digiatto.onrender.com/footer",
      "https://digiatto.onrender.com/excellence",
      "https://digiatto.onrender.com/serviceslider",
      "https://digiatto.onrender.com/projectcategory",
      "https://digiatto.onrender.com/expertise",
      "https://digiatto.onrender.com/navbarlogo",
      "https://digiatto.onrender.com/hireme",
      "https://digiatto.onrender.com/contactinfo",
    ];

    const [
      ourProjData,
      homeSlider,
      whatwedo,
      weareexpert,
      awards,
      footer,
      timeline,
      serviceslider,
      digiautomation,
      expertise,
      navbarlogo,
      hireme,
      contactinfo,
    ] = await Promise.all(urls.map(url => fetchData(url)));

    dispatch({
      type: FETCH_COMBINED_DATA_SUCCESS,
      payload: {
        ourProjData,
        homeSlider,
        whatwedo,
        weareexpert,
        awards,
        footer,
        timeline,
        serviceslider,
        digiautomation,
        expertise,
        navbarlogo,
        hireme,
        contactinfo,
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    dispatch({ type: FETCH_COMBINED_DATA_FAILURE, payload: error.message });
  }
};

// Submit Contact Form Action
export const submitContactForm = (formData) => async (dispatch) => {
  dispatch({ type: SUBMIT_CONTACT_FORM_REQUEST });
  try {
    console.log("Submitting contact form with data:", formData);

    const response = await axios.post("https://digiatto.onrender.com/expertadvice", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: SUBMIT_CONTACT_FORM_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error.response) {
      console.error("Server responded with:", error.response.data);
      dispatch({ type: SUBMIT_CONTACT_FORM_FAILURE, payload: error.response.data.message });
    } else {
      console.error("Error submitting contact form:", error.message);
      dispatch({ type: SUBMIT_CONTACT_FORM_FAILURE, payload: error.message });
    }
  }
};
