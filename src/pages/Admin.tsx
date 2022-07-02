import React from 'react'
import MenuAPIForAdmin from '../components/MenuAPIForAdmin';
import AdminNavigation from '../pages/AdminNavigation';


type Props = {}

const Admin = (props: Props) => {
  return (
    <div>
       
      < AdminNavigation />
      <MenuAPIForAdmin />
    </div>
  )
}

export default Admin