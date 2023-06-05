import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
              cine_yelmo_dark_blue: '#0A0358',
              cine_yelmo_white: '#ffffff'
            },
      
            fontFamily: {
              zurich: "zurich",
              finl: "finlandica",
              xxx: "PurpleQueen"
            }
          }
  }
}