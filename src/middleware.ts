export { default } from "next-auth/middleware";
// https://zenn.dev/sakazuki_xyz/articles/2cabad91bb8acb
// 基本的な使い方としては上記設定だけでページへのリクエスト時に認証チェックを行い、認証に失敗すればサインイン画面にリダイレクトされます。

// このままだと全てのページに対して認証チェックが走ってしまいますが、さらにconfigオブジェクトをexportすることで適用するページを設定することができます。
// こちらはnextの機能で、middleware.tsで設定した処理を特定のパスで実行できるようになります。
export const config = {
    matcher: ["/((?!register|api|login).*)"],
};
