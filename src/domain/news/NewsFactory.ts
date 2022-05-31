import NewsEntity from './NewsEntity';

type NewsType = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
};
export default class NewsFactory {
  reconstitute(data: any) {
    const allNews: any = [];
    if (data && data.length) {
      data.forEach((news: NewsType) => {
        const newsInstance = this.makeEmpty();

        newsInstance.setId(news.id);
        newsInstance.setTitle(news.title);
        newsInstance.setDate(news.date);
        newsInstance.setDescription(news.description);
        newsInstance.setImage(news.image);

        allNews.push(newsInstance);
      });
      return { allNews };
    }
  }
  makeEmpty() {
    return new NewsEntity();
  }
}
