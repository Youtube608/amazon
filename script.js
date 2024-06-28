document.getElementById('articleForm').addEventListener('submit', addArticle);

function showAddArticleForm() {
    document.getElementById('addArticleForm').style.display = 'block';
}

function hideAddArticleForm() {
    document.getElementById('addArticleForm').style.display = 'none';
}

function addArticle(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const article = {
        title: title,
        content: content
    };

    let articles = localStorage.getItem('articles');
    if (articles) {
        articles = JSON.parse(articles);
    } else {
        articles = [];
    }
    articles.push(article);
    localStorage.setItem('articles', JSON.stringify(articles));
    
    displayArticles();
    hideAddArticleForm();
}

function displayArticles() {
    const articlesDiv = document.getElementById('articles');
    articlesDiv.innerHTML = '';

    let articles = localStorage.getItem('articles');
    if (articles) {
        articles = JSON.parse(articles);
        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
            articlesDiv.appendChild(articleDiv);
        });
    }
}

window.onload = displayArticles;
