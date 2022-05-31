import NewsEntity from './NewsEntity';

export default class NewsViewMapper {
  static map(news: Array<NewsEntity>) {
    if (news === undefined) return [];
    return news.map((news: NewsEntity) => {
      return {
        id: news.id,
        title: news.title,
        date: news.date,
        description: news.description,
        image: news.image,
      };
    });
  }
}
