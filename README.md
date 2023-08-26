This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

まず、開発サーバーを起動:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開くと結果が表示されます。

app/page.tsx`を修正することでページの編集を開始できます。あなたがファイルを編集すると、ページは自動的に更新されます。

## Learn More

Next.jsの詳細については、以下のリソースをご覧ください:

- [Next.js Documentation](https://nextjs.org/docs) - Next.jsの機能とAPIを学ぶ
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsチュートリアル

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Prismaの稼働

- ```.env```ファイルを作成
- ```.env```内にDBの内容により以下（postgreSQLの場合）を設定
- ```DATABASE_URL="postgresql://[ユーザー名]:[パスワード]@127.0.0.1:5432/[DB名]?schema=[スキーマ名]"```