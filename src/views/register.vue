<template>
  <div class="register_paper">
    <h2>新用户注册</h2>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" enctype="multipart/form-data" class="form_unit">
      <FormItem label="手机号" prop="phoneNum">
        <Row>
          <Col span="8">
            <Input v-model="formValidate.phoneNum" placeholder="请输入手机号"></Input>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Row>
          <Col span="8">
            <Input v-model="formValidate.password" type="password" placeholder="请输入密码"></Input>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="邮箱" prop="mail">
        <Row>
          <Col span="8">
            <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="学历" prop="studyExperience">
        <Row>
          <Col span="8">
            <Select v-model="formValidate.studyExperience" placeholder="请选择学历信息">
              <Option value="小学">小学</Option>
              <Option value="初中">初中</Option>
              <Option value="高中">高中</Option>
              <Option value="大学">大学</Option>
            </Select>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="日期" prop="date">
        <Row>
          <Col span="11">
            <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date" @on-change="formValidate.date=$event"></DatePicker>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="性别" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="男">男</Radio>
          <Radio label="女">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="爱好" prop="interest">
        <CheckboxGroup v-model="formValidate.interest">
          <Checkbox label="吃饭"></Checkbox>
          <Checkbox label="睡觉"></Checkbox>
          <Checkbox label="敲代码"></Checkbox>
          <Checkbox label="打球"></Checkbox>
          <Checkbox label="游泳"></Checkbox>
          <Checkbox label="画画"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
    <div class="annex">
      <div class="annex_file">
        <span v-show="!isShow">设置头像</span>
        <input type="file" @change="getFile($event)" name="file" accept="image/jpeg,image/png,image/gif">
        <img :src="src" alt="" v-show="isShow">
      </div>
    </div>
  </div>
</template>

<script>
import {HELLO} from '../lib/axios'
import {mapMutations} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      file: '',
      src: '',
      isShow: false,
      formValidate: {
        phoneNum: '',
        password: '',
        mail: '',
        studyExperience: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        phoneNum: [
          {
            required: true,
            message: '请输入手机号！',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码！',
            trigger: 'blur'
          }
        ],
        mail: [
          {
            required: true,
            message: '请输入邮箱！',
            trigger: 'blur'
          },
          { type: 'email', message: '请输入正确的邮箱地址！', trigger: 'blur' }
        ],
        studyExperience: [
          {
            required: true,
            message: '请选择学历信息！',
            trigger: 'change'
          }
        ],
        gender: [
          { required: true, message: '请选择性别！', trigger: 'change' }
        ],
        interest: [
          {
            required: true,
            type: 'array',
            min: 1,
            message: '请选择爱好！',
            trigger: 'change'
          },
          {
            type: 'array',
            max: 3,
            message: '只能选择3个兴趣爱好！',
            trigger: 'change'
          }
        ],
        date: [
          {
            required: true,
            type: 'string',
            message: '请选择日期！',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['IMG_URL']),
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid && this.file) {
          this.submitForm()
        } else {
          this.$Message.error('请完善注册信息!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    getFile (event) {
      this.file = event.target.files[0]
      if (this.file) {
        this.isShow = true
      }
      var type = this.file.type
      if (type.indexOf('image') !== -1) {
        var fileReader = new FileReader()
        fileReader.readAsDataURL(this.file)
        fileReader.onload = () => {
          var src = fileReader.result
          this.src = src
          console.log(src)
          this.IMG_URL(src)
        }
      } else {
        this.$Message.error('只能上传图片!')
      }
    },
    submitForm () {
      let formData = new FormData()
      formData.append('phoneNumber', this.formValidate.phoneNum)
      formData.append('password', this.formValidate.password)
      formData.append('file', this.file)
      formData.append('email', this.formValidate.mail)
      formData.append('calendar', this.formValidate.date)
      formData.append('sex', this.formValidate.gender)
      formData.append('hobby', this.formValidate.interest)
      formData.append('studyExperience', this.formValidate.studyExperience)
      // this.$axios.post('/api/devp_environment/register', formData).then(function (res) {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
      HELLO.register(formData).then(res => {
        console.log(res)
        this.$Message.success('注册成功')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.register_paper {
  width: 100%;
  height: 100%;
  background: url('../assets/images/re_bgc.jpg') no-repeat;
  background-size: cover;
  display: flex;
  h2 {
    transform: translate(200px);
    margin-top: 10px;
  }
  .form_unit {
    flex: 1;
    margin-top: 50px;
  }
  .annex {
    flex: 1;
    .annex_file {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 1px solid #999;
      margin-top: 100px;
      position: relative;
      span {
        display: flex;
        position: absolute;
        user-select: none;
        cursor: pointer;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        font-size: 24px;
      }
      input {
        position: absolute;
        z-index: 10;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }
      img {
        position: absolute;
        top: 0;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

<style lang="less">
.aaa {
  .ivu-input {
    background: aqua;
  }
}
</style>
