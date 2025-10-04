import { LocaleInput } from '../index.js'

export default {
  code: 'fr',
  week: {
    dow: 1,
    doy: 4,
  },
  buttonText: {
    prev: 'Précédent',
    next: 'Suivant',
    today: 'Aujourd’hui',
    year: 'Année',
    month: 'Mois',
    week: 'Semaine',
    day: 'Jour',
    list: 'Agenda',
  },
  weekText: 'Sem.',  // or “Sem” depending on your style
  weekTextLong: 'Semaine',
  allDayText: 'Toute la journée',
  moreLinkText(n) {
    // “+ n de plus”
    return `+ ${n} de plus`
  },
  noEventsText: 'Aucun événement à afficher',
  buttonHints: {
    prev(buttonText) {
      return `Précédent ${buttonText.toLowerCase()}`
    },
    next(buttonText) {
      return `Suivant ${buttonText.toLowerCase()}`
    },
    today(buttonText) {
      if (buttonText === 'Day') {
        return 'Aujourd’hui'
      }
      return `Cette ${buttonText.toLowerCase()}`
    },
  },
  viewHint(buttonText) {
    // e.g. “Vue jour”, “Vue semaine”, etc.
    const lower = buttonText.toLowerCase()
    return `Vue ${lower}`
  },
  navLinkHint: 'Aller à $0',
  moreLinkHint(eventCnt: number) {
    return eventCnt === 1
      ? 'Afficher un autre événement'
      : `Afficher ${eventCnt} autres événements`
  },
  closeHint: 'Fermer',
  timeHint: 'Heure',
  eventHint: 'Événement',
} as LocaleInput
