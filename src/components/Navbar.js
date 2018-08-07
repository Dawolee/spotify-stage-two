import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default function Navbar() {
  return (
    <Menu inverted compact borderless attached widths={3}>
      <Menu.Item />
      <Menu.Item>Schedu-Lee</Menu.Item>
      <Menu.Item />
    </Menu>
  )
}
