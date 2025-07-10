/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { authDATAContext } from './AuthContext';
import axios from 'axios';

export const adminDATAContext = createContext();

function AdminContext({ children }) {
  const [adminData, setAdminData] = useState(null);
  const { serverUrl } = useContext(authDATAContext);

  const getAdmin = async () => {
    try {
      const admin = await axios.get(`${serverUrl}api/user/getadmin`, {
      
      });
      setAdminData(admin.data);
      console.log(admin.data);
    } catch (error) {
      console.error(error);
      setAdminData(null);
    }
  };

  useEffect(() => {
    getAdmin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // optionally add serverUrl if it's dynamic

  return (
    <adminDATAContext.Provider value={{ adminData, setAdminData, getAdmin }}>
      {children}
    </adminDATAContext.Provider>
  );
}

export default AdminContext;
