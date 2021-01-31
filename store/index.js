const hotels = new Array(9).fill({}).map((_, index) => {
  return {
    id: index+1,
    name: `Отель №${index+1}`,
    description: `В этом отеле Вы окунётесь в незабываемую атмосферу уюта. Мирская суета останется далеко позади. 
      Отель №${index+1} не разочарует Вас.`,
    img: `https://picsum.photos/id/${Math.round(Math.random() * 100)}/500/300`,
  }
})

export const state = () => ({
  hotels,
  notice: {show: false, text: ''}
})

export const mutations = {
  showSnackbar(state, {show, text}) {
    state.notice.show = show
    state.notice.text = text

    setTimeout(() => {
      this.commit('showSnackbar', {show: false})
    }, 5000);
  }
}