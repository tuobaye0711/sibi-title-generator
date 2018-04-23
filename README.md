# sibi-title-generator

生成形如《驳《驳《驳《XXXXX》》》》的文章标题

## Installation

```sh
git clone https://github.com/tuobaye0711/sibi-title-generator.git
```

## Usage

```javascript
let sibi = require('sibi-title-generator');

sibi('我不是很懂 Node.js 社区的 DRY 文化', 3); // 《驳《驳《我不是很懂 Node.js 社区的 DRY 文化》》》
sibi('Vue从Angular里面抄了哪些东西？', 5); // 《驳《驳《驳《驳《Vue从Angular里面抄了哪些东西？》》》》》
sibi('不明真相的围观群众', 0); // 《不明真相的围观群众》
```
## License

MIT