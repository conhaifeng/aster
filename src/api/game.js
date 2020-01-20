import axios from '@/util/axios'

export default function getGroupData(gameId, data) {
    const url = "http://www.vpgame.com/schedule/api/dota2/pro/webservice/das/data/rank/groupRank/" + gameId
    return axios.get(url, {
        params: data
    })
}