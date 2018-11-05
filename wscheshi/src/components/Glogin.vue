<template>
	<div>
		<div class="container" v-if="info==='kjlogin'">
			<div class="tabbox">
				<a href="#" class="cur">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">登录快捷</font>
					</font>
				</a>
				<a href="login.php">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">账号登录</font>
					</font>
				</a>
			</div>
			<div class="formbox">
				<div class="sigbox">
					<span class="icon_span iphone"></span>
					<input class="phone_input" type="number" placeholder="请输入手机号">
				</div>
				<div class="sigbox">
					<span class="icon_span icon_yzm"></span>
					<input class="password_input3" type="text" placeholder="请输入右侧验证码">
					<img class="yzm_img" src="http://service.cheshi.com/user/validate/validatev3.php" alt="">
				</div>
				<div class="sigbox">
					<span class="icon_span password"></span>
					<input class="password_input" type="text" placeholder="请输入短信校验码">
					<span class="yzm"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取校验码</font></font></span>
				</div>
				<p class="tips">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">登录即视为同意</font>
					</font>
					<a href="http://www.cheshi.com/webcenter/service_wap.html">
						<font style="vertical-align: inherit;">
							<font style="vertical-align: inherit;">“网络服务使用协议及隐私权声明”</font>
						</font>
					</a>
				</p>
				<font style="vertical-align: inherit;">
					<font style="vertical-align: inherit;"><input class="subbtn" type="button" value="登录"></font>
				</font>
				<p class="joinn">
					<a href="register.php">
						<font style="vertical-align: inherit;">
							<font style="vertical-align: inherit;">立即注册</font>
						</font>
					</a>
				</p>
			</div>
			<div class="dsf">
				<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三方登录</font></font></span>
			</div>
			<div class="icon_box">
				<a class="qq" href="https://service.cheshi.com/user/qq_login_2014/index.php?backurl=http://bbs.cheshi.com/m/thread/5187396.html">
					<i></i>
					<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">QQ</font></font></span>
				</a>
				<a class="wb" href="https://api.weibo.com/oauth2/authorize?client_id=3898934162&amp;redirect_uri=https://service.cheshi.com/user/login_sina_2014/callback.php&amp;response_type=code&amp;state=&amp;backurl=http://bbs.cheshi.com/m/thread/5187396.html">
					<i></i>
					<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">微博</font></font></span>
				</a>
			</div>
			<div class="posbox">
				<div class="jdbox">
					<p>
						<font style="vertical-align: inherit;">
							<font style="vertical-align: inherit;">请输入正确</font>
						</font>
					</p>
				</div>
			</div>
		</div>
		<div class="container" v-if="info==='zhlogin'">
			<div class="tabbox">
				<a href="#">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">快捷登录</font>
					</font>
				</a>
				<a href="login.php" class="cur">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">账号登录</font>
					</font>
				</a>
			</div>
			<div class="formbox">
				<div class="sigbox">
					<span class="icon_span iphone"></span>
					<input class="phone_input" type="text" placeholder="请输入手机号/用户名">
				</div>
				<div class="sigbox">
					<span class="icon_span password"></span>
					<input class="password_input2" type="password" placeholder="请输入密码">
				</div>
				<p class="tips">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">登录即视为同意</font>
					</font>
					<a href="http://www.cheshi.com/webcenter/service_wap.html">
						<font style="vertical-align: inherit;">
							<font style="vertical-align: inherit;">“网络服务使用协议及隐私权声明”</font>
						</font>
					</a>
				</p>
				<font style="vertical-align: inherit;">
					<font style="vertical-align: inherit;"><input class="subbtn" type="button" value="登录"></font>
				</font>
				<p class="joinn">
					<a href="register.php">
						<font style="vertical-align: inherit;">
							<font style="vertical-align: inherit;">立即注册</font>
						</font>
					</a><i></i>
					<a href="password.php">
						<font style="vertical-align: inherit;">
							<font style="vertical-align: inherit;">忘记密码</font>
						</font>
					</a>
				</p>
			</div>
			<div class="dsf">
				<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三方登录</font></font></span>
			</div>
			<div class="icon_box">
				<a class="qq" href="https://service.cheshi.com/user/qq_login_2014/index.php?version=20180918&amp;backurl=http://bbs.cheshi.com/m/thread/5187396.html">
					<i></i>
					<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">QQ</font></font></span>
				</a>
				<a class="wb" href="https://api.weibo.com/oauth2/authorize?client_id=3898934162&amp;redirect_uri=https://service.cheshi.com/user/login_sina_2014/callback.php&amp;response_type=code&amp;state=&amp;backurl=http://bbs.cheshi.com/m/thread/5187396.html">
					<i></i>
					<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">微博</font></font></span>
				</a>
			</div>
			<div class="posbox">
				<div class="jdbox">
					<p>
						<font style="vertical-align: inherit;">
							<font style="vertical-align: inherit;">请输入正确</font>
						</font>
					</p>
				</div>
			</div>
		</div>
		<div class="container" v-if="info===register">
			<div class="tabbox">
				<a href="#" class="cur nobor">注册车市账号</a>
			</div>
			<div class="formbox">
				<div class="sigbox">
					<span class="icon_span iphone"></span>
					<input class="phone_input" type="number" placeholder="请输入手机号">
				</div>
				<div class="sigbox">
					<span class="icon_span icon_yzm"></span>
					<input class="password_input3" type="text" placeholder="请输入右侧验证码">
					<img class="yzm_img" src="http://service.cheshi.com/user/validate/validatev3.php" alt="">
				</div>
				<div class="sigbox">
					<span class="icon_span password"></span>
					<input class="password_input" type="text" placeholder="请输入短信校验码">
					<span class="yzm">获取校验码</span>
				</div>
				<div class="sigbox">
					<span class="icon_span password"></span>
					<input class="password_input2" type="password" placeholder="请设置密码(6-18位数字、字母组合)">
				</div>
				<p class="tips">注册即视为同意
					<a href="http://www.cheshi.com/webcenter/service_wap.html">《网络服务使用协议及隐私权声明》</a>
				</p>
				<input class="subbtn" type="button" value="立即注册">
				<p class="joinn"><span>已有账号？</span>
					<a href="login.php">立即登录</a><span class="quick">手机号</span>
					<a href="fastLogin.php">快速登录</a>
				</p>
			</div>
			<div class="posbox">
				<div class="jdbox">
					<p>请输入正确</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["info"]
	}
</script>

<style scoped>
	.container {
		width: 100%;
	}
	
	.topbox {
		height: .9rem;
		width: 100%;
		padding: 0 .32rem;
		line-height: .9rem;
	}
	
	.goback {
		display: inline-block;
		width: .23rem;
		height: .41rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAApCAYAAADeWrJ9AAAAAXNSR0IArs4c6QAAAM9JREFUSA1jYKAekAIatReIPwHxNOoZy8AAMvgWEP9HwpLUsACbwSBLKDYcl8GrKXU1LoPXAQ1mpcRwkME3gRg5jEHsUYPhQTIaFKNBMZpBgGXC0CsrgI4GV01UL91ABoPAVyBGNvwjkC8EkqAGWAs0BNlwEPsIEPNQw3A+oCHHgXjUApyhORpEOIMGJjEaRLCQwEmDgugEENM0o41agDP8QRLDNw4OAn3HhNfvREriCiIZIvUTVIbNAjFmgtqIU/ATqGwlEHMA8Xcg7gPi/QC8Pdw5mPLwsAAAAABJRU5ErkJggg==) left center no-repeat;
		background-size: 100% auto;
		vertical-align: middle;
	}
	
	.tabbox {
		height: .95rem;
		padding: 0 .32rem;
		font-size: 0;
		width: 100%;
		margin-bottom: .9rem;
	}
	
	.tabbox a {
		float: left;
		font-size: .32rem;
		color: #B0B0B0;
		line-height: .95rem;
		height: .95rem;
		position: relative;
	}
	
	.tabbox a.cur {
		font-size: .42rem;
		color: #333;
		font-weight: bold;
		line-height: .86rem;
	}
	
	.tabbox a:first-child {
		margin-right: .48rem;
	}
	
	.tabbox a.cur:after {
		width: .48rem;
		height: .06rem;
		border-radius: .03rem;
		background: #1590E3;
		content: "";
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
	
	.tabbox a.nobor:after {
		display: none;
	}
	
	.formbox {
		padding: 0 .32rem;
	}
	
	.sigbox {
		border-bottom: 1px solid #f0f0f0;
		height: 1.08rem;
		overflow: hidden;
		line-height: 1.08rem;
	}
	
	.icon_span {
		float: left;
		width: .28rem;
		height: .36rem;
		margin-right: .44rem;
		margin-top: .36rem;
	}
	
	.phone_input,
	.password_input,
	.password_input2,
	.password_input3 {
		height: 100%;
		font-size: .34rem;
	}
	
	.password_input,
	.password_input3 {
		width: 3.4rem;
	}
	
	.password_input3 {
		float: left;
	}
	
	.phone_input,
	.password_input2 {
		width: calc(100% - .72rem);
	}
	/*.phone_input::-webkit-input-placeholder,.password_input::-webkit-input-placeholder,.password_input2::-webkit-input-placeholder{font-size: .34rem;}*/
	
	.iphone {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAkCAYAAACaJFpUAAAAAXNSR0IArs4c6QAAAOFJREFUSA3tl+0JAyEMhv3oGHagCq7RobqGYAeqa0hrRItw5E4D+iuC6EXz5vJ4B0Y65x4ppZcQwuS+skWt9VNtCgaJGIh1gwk8hRAkjKuatfabtY1aFQDT5YAYGbKdkZLRYY6MFCNDtjNSMjrMkZFiZMh2RkpGhzkyUowM2S7r9Y0sMOsI99LSNt1LxfaP5p9hy/Rq7GoRAbWC9/595dOvT2fY1SKlVujFRubTAUdEz/ZMBwSMWTBCr/Mz/cPa9BnWM7sflAYN0xkO6qLb4Mf/5NXV1W97gai6M2nGVWM58x9QhDJB4tEUOgAAAABJRU5ErkJggg==) center center no-repeat;
		background-size: 100%;
	}
	
	.password {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAkCAYAAACaJFpUAAAAAXNSR0IArs4c6QAAAsBJREFUSA29V01rE1EUdSYVSnQhZBEXqRShKuJGDP4DBTNJjNRtIau4suAHLiULwY1WQUEbFLpyE1qxidm7LXFRUvBjIYKBuPAHSGIynlPn0el8ZO4b7Dy4fXfuPeee99XXV+OQoNXr9Zlut7s4mUzKhmFcBOW4Q/tp2/aWaZqb+Xx+Hbg/UeWMKECxWLyGoo9gJ6dhMZBvsLvtdvvtNJwZloSAYVnWCma1QTEU28FMbqI/m8lkjtLoO7EdYoglh9ywuqGJQqHwGKTbsN8oeqvVaq1CwA4qRIFSqXQDgk+Qn4WtdDqdO0HYQEGMsowi70CwIVJ6jxZE9sbAs8BrIQ6acRW0TS/Gt6S1Wu0wSM8JBOmhVIx4Ysmhj/aMtf65ez99goPBoIz0HKyXTqfv70FlnsPpYdAnnFr7iD5B7MN1IrBvjWazOd6HFnyQQy6hqpab5hNE8gIBqVTqgxuo47u4u7XcXJ8glmKBgGw2+9kN1PEVV9Vyc32CKtloNEbK1+2ncUMFdUWk+MQFeUNcGY/HPFU56Shj4vo4TDUzITGOMUetGTr8wt0XeM0x9z8a7mbew7nE9zBxQS6pVsPSVHF1zZOEq+s7tmKNvrTFmWEVN8g8DSJVqZDCxRHkn601miqi08cS1BHwYrX3EAVmsXcPnELafK0Z4gVXx1KehtgRGn3GHHFRJxbE6VzCzMo4oQs4medp9BljTqQGkFgQ2GXchct4vf1SxekzxpyKRfViQSzfGdi2tyBjXFpvPOxbLIgCX7B857yFnNhXbzzsWyyI/XqJX/anlUrlmCpGnzF8v1CxqF58rLFfr3AiTw2Hwx7eux0WHo1GFpbzDf6feB0lpPLiGZKAwvcgcBnuR8cuMcactIlnqAricf0JPi1W05phLAUPKXFBA7fEDwzioB9Qap59ky8pfPVV5AD73VfbX5ioBJxioe3LAAAAAElFTkSuQmCC) center center no-repeat;
		background-size: 100%;
	}
	
	.icon_yzm {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAkCAYAAACaJFpUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTcxODQ5QTNCQTQzMTFFODgyQTNBMzA5MDNBQUExMTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTcxODQ5QTRCQTQzMTFFODgyQTNBMzA5MDNBQUExMTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNzE4NDlBMUJBNDMxMUU4ODJBM0EzMDkwM0FBQTExMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNzE4NDlBMkJBNDMxMUU4ODJBM0EzMDkwM0FBQTExMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn5weboAAAFVSURBVHja7FfRbYMwEMURA9AN6ATtAK6UEToASHQDj8AIjMAIHQHJyT8bJCOwAb1Uz5V7MsZpHSNFsfQE5sx73PkO22Ke5yxl22WJW17XtaarXLAfCG9Xcnr5dh7jpYnIDsr8BuRLEZk3mcOHYPyyQOqLBFrfOvkf6uxf2bv5HGrUS0xon6DEfBo8s/7ac5dNrmVpSegJE6Fhtj1hJJxgV5atgUcnjClDy6IA2dnzMU+Elgme4d0H4YXwvlQWvI0gGhy2ngkUVn+wxihmi1L4Fw8/2bPBikwXU9B4qhwf0SL0KjSkIWKvSKDJ4aGZ632oYAHCwnpxBHmHZGgwxhZpEU6T3X2oYImXJ+teQdROKrtUMlYm3ZKgqKqKr8qxf+S/OHPHHz32vvHoC+nNV45NFmCdyDttBGUi5+Rj13Z/gqv7kSuy0cX1I3hIeHo6irs/AX8JMABemWZzG6x6hgAAAABJRU5ErkJggg==) center center no-repeat;
		background-size: 100%;
	}
	
	.yzm {
		float: right;
		padding-left: .62rem;
		width: 2.72rem;
		height: .32rem;
		color: #1590e3;
		margin-top: .38rem;
		line-height: .32rem;
		font-size: .34rem;
		position: relative;
		text-align: center;
	}
	
	.yzm:after {
		height: .32rem;
		width: 1px;
		content: "";
		background: #d9d9d9;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.yzm_img {
		float: right;
		height: .6rem;
		margin-top: .24rem;
	}
	
	.tips {
		font-size: .24rem;
		color: #b0b0b0;
		margin-top: .16rem;
		margin-bottom: .48rem;
	}
	
	.tips a {
		color: #b0b0b0;
		text-decoration: underline;
	}
	
	.subbtn {
		display: block;
		width: 100%;
		height: .78rem;
		background-image: linear-gradient(90deg, #1590e3 0%, #2FC3F3 100%);
		border-radius: 4px;
		font-size: .32rem;
		color: #fff;
		margin-bottom: .32rem;
	}
	
	.joinn {
		text-align: center;
		margin-bottom: 1.84rem;
		font-size: 0;
	}
	
	.joinn a {
		color: #1590e3;
		font-size: .24rem;
		vertical-align: middle;
		display: inline-block;
	}
	
	.joinn i {
		display: inline-block;
		width: 1px;
		height: .2rem;
		background: #D9D9D9;
		vertical-align: middle;
		margin: 0 .32rem;
	}
	
	.joinn span {
		font-size: .24rem;
		vertical-align: middle;
	}
	
	.dsf {
		height: 1px;
		width: calc(100% - .64rem);
		margin: 0 auto .77rem;
		background: #f0f0f0;
		position: relative;
	}
	
	.dsf span {
		line-height: .35rem;
		font-size: .24rem;
		color: #b0b0b0;
		height: .35rem;
		float: left;
		background: #fff;
		position: absolute;
		padding: 0 .43rem;
		top: -.17rem;
		left: 50%;
		transform: translateX(-50%);
	}
	
	.icon_box {
		text-align: center;
		font-size: 0;
	}
	
	.icon_box a {
		display: inline-block;
		margin: 0 .4rem;
		width: 1rem;
		font-size: .2rem;
		color: #333;
	}
	
	.icon_box a i {
		display: block;
		width: 1rem;
		height: 1rem;
	}
	
	.qq i {
		background: url(data:image/png;base64,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) center center no-repeat;
		background-size: 100%;
	}
	
	.wb i {
		background: url(data:image/png;base64,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) center center no-repeat;
		background-size: 100%;
	}
	
	.posbox {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-align-items: center;
		align-items: center;
		background: rgba(255, 255, 255, .1);
		z-index: 999;
		opacity: 1;
		display: none;
	}
	
	.jdbox {
		max-width: 4rem;
		text-align: center;
		background: rgba(0, 0, 0, .7);
		color: #fff;
		font-size: .24rem;
		padding: .2rem;
		border-radius: 4px;
	}
	
	.jdbox p {
		line-height: 2;
	}
	
	.quick {
		margin-left: .4rem;
	}
	
	.margin_bottom {
		width: 100%;
		height: 0;
		margin-bottom: 1rem;
	}
</style>