const initialState = {
  ourProjData: [],
  homeSlider: [],
  whatwedo: [],
  weareexpert: [],
  awards: [],
  footer: [],
  timeline: [],
  serviceslider: [],
  digiautomation: [],
  expertise: [],
  navbarlogo: [],
  hireme: [],
  contactinfo: [],
  loading: false,
  error: null,
  contactFormLoading: false,
  contactFormError: null,
  contactFormSuccess: false,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COMBINED_DATA_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_COMBINED_DATA_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        ourProjData: Array.isArray(action.payload.ourProjData) ? action.payload.ourProjData : [], 
        homeSlider: Array.isArray(action.payload.homeSlider) ? action.payload.homeSlider : [], 
        whatwedo: Array.isArray(action.payload.whatwedo) ? action.payload.whatwedo : [],
        weareexpert: Array.isArray(action.payload.weareexpert) ? action.payload.weareexpert : [],
        awards: Array.isArray(action.payload.awards) ? action.payload.awards : [], 
        footer: Array.isArray(action.payload.footer) ? action.payload.footer : [],  
        timeline: Array.isArray(action.payload.timeline) ? action.payload.timeline : [], 
        serviceslider: Array.isArray(action.payload.serviceslider) ? action.payload.serviceslider : [],
        digiautomation: Array.isArray(action.payload.digiautomation) ? action.payload.digiautomation : [],
        expertise: Array.isArray(action.payload.expertise) ? action.payload.expertise : [],  
        navbarlogo: Array.isArray(action.payload.navbarlogo) ? action.payload.navbarlogo : [],
        hireme: Array.isArray(action.payload.hireme) ? action.payload.hireme : [],
        contactinfo: Array.isArray(action.payload.contactinfo) ? action.payload.contactinfo : [],  
      };
    case 'FETCH_COMBINED_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'SUBMIT_CONTACT_FORM_REQUEST':
      return { 
        ...state, 
        contactFormLoading: true, 
        contactFormError: null, 
        contactFormSuccess: false 
      };
    case 'SUBMIT_CONTACT_FORM_SUCCESS':
      return { 
        ...state, 
        contactFormLoading: false, 
        contactFormSuccess: true 
      };
    case 'SUBMIT_CONTACT_FORM_FAILURE':
      return { 
        ...state, 
        contactFormLoading: false, 
        contactFormError: action.payload 
      };
    
    default:
      return state;
  }
};

export default apiReducer;
