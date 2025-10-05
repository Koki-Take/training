import { Box } from '@mui/material'
import React from 'react'
import MontylySummary from '../components/MontylySummary'
import Calendaer from '../components/Calendaer'
import TransactionMenu from '../components/TransactionMenu'
import TransactionForm from '../components/TransactionForm'

const Home = () => {
  return (
    <Box sx={{ display: 'flex'}}>
      {/* 左側コンテンツ */}
      <Box sx={{flexGrow: 1, backgroundColor: "pink"}}>
        <MontylySummary />
        <Calendaer />
      </Box>
      {/* 右側コンテンツ */}
      <Box>
        <TransactionMenu />
        <TransactionForm />
      </Box>
    </Box>
  )
}

export default Home