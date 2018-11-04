<template>
	<div>
		<section class="search_box">
			<div class="search_btn">
				<form onsubmit="return false;">
					<input class="search_txt" id="search_txt" type="search" placeholder="请输入关键词…">

					<a class="search_cancel" href="javascript:;">
						<font style="vertical-align: inherit;">
							<font style="vertical-align: inherit;">搜索</font>
						</font>
					</a>
				</form>
			</div>
		</section>
		<section class="search_process" style="">
			<div class="search_hot">
				<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">热门搜索</font></font></h3>
				<div class="cq_circle">
					<div class="circle clearfix">
						<a href="javascript:;">
							<font style="vertical-align: inherit;">
								<font style="vertical-align: inherit;">游记</font>
							</font>
						</a>
						<a href="javascript:;">
							<font style="vertical-align: inherit;">
								<font style="vertical-align: inherit;">大众</font>
							</font>
						</a>
						<a href="javascript:;">
							<font style="vertical-align: inherit;">
								<font style="vertical-align: inherit;">奥迪</font>
							</font>
						</a>
					</div>
				</div>
			</div>
			<div class="search_history" style="display: none;">
				<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
				历史搜索
				 </font></font><span class="search_del"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清空记录</font></font></span>
			</h3>
				<ul class="search_list"></ul>
			</div>
		</section>
	</div>
</template>

<script>
</script>

<style>

</style>