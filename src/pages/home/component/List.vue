<template>
	<div class="blog-list fl">
		<div class="title" v-if="!$store.state.searchVal">
			<h2>{{name}}</h2>
		</div>
		<ul class="list-box">
			<li v-for="item in list" :key="item.id">
				<h3>
					<type-icon :tagId="item.tagId" />
					{{item.title}}
				</h3>
				<p class="note">{{item.content}}</p>
				<p class="meta">
					<time>
						<i class="el-icon-time"></i>
						{{item.createTime | formatTime}}
					</time>
					<span class="author">
						<i class="iconfont icon-yonghu"></i>
						<a href="http://jspang.com/author/jspang001/">{{item.author}}</a>
					</span>
					<span class="pv"><i class="el-icon-view"></i>阅读 ( {{item.readNumber}} )</span>
					<a class="pc" href="#">
						<i class="iconfont icon-pinglun"></i>评论 ( {{item.commentNumber}} )
					</a>
				</p>
			</li>
		</ul>
		<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="sizes"
      :page-size="pageSize"
      :layout="layout"
      :total="1000">
    </el-pagination>
	</div>
</template>
<script>
import table from '../../../common/mixins/table.js';
import TypeIcon from '../../../common/components/TypeIcon.vue';
export default {
	props: ['typeId', 'tagId'],
	mixins: [ table ],
	components: {
		TypeIcon
	},
	data() {
		return {
			list: []
		};
	},
	computed: {
		name() {
			let name = '';
			switch (this.$route.name) {
			case 'HomeIndex':
				name = '最新博文';
				break;
			case 'NoteIndex':
				name = '前端笔记';
				break;
			case 'LiveIndex':
				name = '生活日记';
				break;
			default:
				let index = this.$store.state.tags.findIndex(val => {
					return val.id === this.$route.params.tagId;
				});
				name = index > -1 ? this.$store.state.tags[index].name : '';
			}
			return name;
		}
	},
	mounted() {
		console.log(this.$route);
		this.getArticleList();
	},
	methods: {
		initData() {
			this.getArticleList();
		},
		getArticleList() {
			let params = {
				sort: 'createTime',
				page: {
					currentPage: this.currentPage,
					pageSize: this.pageSize
				}
			};
			if(this.typeId) {
				params.typeId = this.typeId;
			}
			if(this.tagId) {
				params.tagId = this.tagId;
			}
			this.$post('/api/articleList', params).then(res => {
				if(res.status === '200') {
					let result = res.result;
					this.list = result.list;
				} else {
					this.$store.commit('message', {
						type: 'error',
						message: res.msg
					});
				}
			});
		}
	}
};
</script>
