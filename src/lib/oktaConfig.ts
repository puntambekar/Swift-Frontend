export const oktaConfig =  {
    clientId:"0oagm790zxWFw78ws5d7",
    issuer:"https://dev-53499801.okta.com/oauth2/default",
    redirectUri:`http://localhost:3000/login/callback`,
    scopes:['openid' , 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
    useClassicEngine: true
}