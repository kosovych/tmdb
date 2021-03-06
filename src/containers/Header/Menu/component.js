import React from 'react'
import { Menu as AntMenu } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Menu = ({ onLogout }) => (
  <AntMenu>
    <AntMenu.Item>
      <Link to="/">Dashboard</Link>
    </AntMenu.Item>
    <AntMenu.Divider />
    <AntMenu.Item>
      <Link to="/lists">My Lists</Link>
    </AntMenu.Item>
    <AntMenu.Item>
      <Link to="/watchlist">Watchlist</Link>
    </AntMenu.Item>
    <AntMenu.Item>
      <Link to="/favorites">Favorites</Link>
    </AntMenu.Item>
    {/* <AntMenu.Divider /> */}
    <AntMenu.Item onClick={onLogout}>Logout</AntMenu.Item>
  </AntMenu>
)

Menu.propTypes = {
  onLogout: PropTypes.func.isRequired
}

export default Menu
