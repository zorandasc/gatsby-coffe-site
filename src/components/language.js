import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  sr: "Srpski",
}

const language = () => {
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => (
          <button
            key={language}
            onClick={() => changeLocale(language)}
            style={{
              color: currentLocale === language ? `green` : `red`,
              margin: 10,
              cursor: `pointer`,
            }}
          >
            {languageName[language]}
          </button>
        ))
      }
    </IntlContextConsumer>
  )
}

export default language
