import './App.css'
// import { Component } from 'react'
import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

const App = () => {
  // console.log('render')
  const [aramaAlanı, setAramaAlanı] = useState('') // değer, fonksiyon
  const [title, setTitle] = useState('')
  const [canavarlar, setCanavarlar] = useState([])
  const [filtrelenmişCanavarlar, setFiltrelenmişCanavarlar] =
    useState(canavarlar)
  console.log('işlendi')
  // const [dizeAlanı, setDizeAlanı] = useState('')
  // console.log('render')

  useEffect(() => {
    console.log('effect ateşlendi')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setCanavarlar(users))
  }, [])

  useEffect(() => {
    const yeniFiltrelenmişCanavarlar = canavarlar.filter((canavar) => {
      return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
    })

    setFiltrelenmişCanavarlar(yeniFiltrelenmişCanavarlar)
    console.log('Effect ateşlendi')
  }, [canavarlar, aramaAlanı])

  // console.log(aramaAlanı)
  const aramaDeğişikliği = (e) => {
    const aramaAlanıDizesi = e.target.value.toLocaleLowerCase()
    setAramaAlanı(aramaAlanıDizesi)
  }
  const başlıkDeğişikliği = (e) => {
    const aramaAlanıDizesi = e.target.value.toLocaleLowerCase()
    setTitle(aramaAlanıDizesi)
  }

  // const dizeDeğişimi = (e) => {
  //   setDizeAlanı(e.target.value)
  // }

  // const filtrelenmişCanavarlar = canavarlar.filter((canavar) => {
  //   return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
  // })
  // console.log(filtrelenmişCanavarlar)
  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        onChangeHandler={aramaDeğişikliği}
        placeholder='canavaları ara...'
        className='monsters-search-box'
      />
      <br />
      <SearchBox
        onChangeHandler={başlıkDeğişikliği}
        placeholder='başlıkları  ara...'
        className='title-search-box'
      />
      {/* <SearchBox onChangeHandler={dizeDeğişimi} placeholder='dize ayarla...' /> */}
      <CardList canavarlar={filtrelenmişCanavarlar} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       canavarlar: [],
//       aramaAlanı: '',
//     }
//     // console.log('constructor')
//   }
//   componentDidMount() {
//     // console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { canavarlar: users }
//           }
//           // () => {
//           //   console.log(this.state)
//           // }
//         )
//       )
//   }
//   aramaDeğişikliği = (e) => {
//     const aramaAlanı = e.target.value.toLocaleLowerCase()

//     this.setState(() => {
//       return { aramaAlanı }
//     })
//   }
//   render() {
//     // console.log("App js'den render")
//     const { canavarlar, aramaAlanı } = this.state
//     const { aramaDeğişikliği } = this
//     // console.log('render')
//     const filtrelenmişCanavarlar = canavarlar.filter((canavar) => {
//       return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
//     })
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Canavarlar</h1>
//         <SearchBox
//           onChangeHandler={aramaDeğişikliği}
//           placeholder='canavaları ara...'
//           className='monsters-search-box'
//         />
//         <CardList canavarlar={filtrelenmişCanavarlar} />
//       </div>
//     )
//   }
// }

export default App
