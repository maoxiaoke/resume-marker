import type { ThemeOptions } from './type';
import type { SVGProps } from 'react';

import './profile.css';

export function BxBxsPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z" fill="currentColor"></path></svg>
  )
}

export function BxBxlGithub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z" fill="currentColor"></path></svg>
  )
}

export function BxBxlBlogger(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path d="M20.954 10.667c-.072-.322-.272-.621-.502-.745c-.07-.039-.522-.088-1.004-.109c-.809-.036-.898-.052-1.152-.201c-.405-.237-.516-.493-.518-1.187c-.002-1.327-.554-2.559-1.646-3.67c-.776-.793-1.645-1.329-2.634-1.629c-.236-.072-.768-.097-2.545-.118c-2.787-.033-3.405.024-4.356.402c-1.748.697-3.008 2.166-3.465 4.05c-.087.353-.103.92-.124 4.177c-.025 4.08.004 4.68.258 5.488c.212.668.425 1.077.861 1.657c.835 1.108 2.083 1.907 3.334 2.133c.595.107 7.931.135 8.683.032c1.306-.178 2.331-.702 3.293-1.684c.694-.71 1.129-1.479 1.414-2.499c.117-.424.127-.63.149-3.117c.017-1.878.002-2.758-.046-2.98zM8.007 8.108c.313-.316.399-.329 2.364-.329c1.764 0 1.822.004 2.081.134c.375.189.538.456.538.88c0 .384-.153.653-.493.869c-.184.115-.293.123-2.021.133c-1.067.007-1.916-.013-2.043-.048c-.669-.184-.918-1.143-.426-1.639zm7.706 8.037l-.597.098l-3.114.035c-2.736.033-3.511-.018-3.652-.08c-.288-.124-.554-.472-.602-.78c-.042-.292.104-.696.33-.9c.285-.257.409-.266 3.911-.27c3.602-.002 3.583-.003 3.925.315c.482.45.381 1.251-.201 1.582z" fill="currentColor"></path></svg>
  )
}

export function BxBxlGmail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path d="M18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z" fill="currentColor"></path></svg>
  )
}

type ContentType = 'mail' | 'text' | 'link';
type IconName = 'mobile' | 'email' | 'blog' | 'github';

const ProfileContent = (type: ContentType, content: string) => {
  switch (type) {
    case 'link':
      return <a href={content} target="_blank">{content}</a>;
      break;
    case 'mail':
      return <a href={`mailto:${content}`}>{content}</a>
      break;
    default:
      return <span>{content}</span>
  }
}

const ProfileItem = ({
  iconName,
  desc,
  type = 'text'
}: {
  iconName: IconName,
  desc: string,
  type?: ContentType
}) => {
  const Icon = new Map([
    ['mobile', BxBxsPhone],
    ['email', BxBxlGmail],
    ['blog', BxBxlBlogger],
    ['github', BxBxlGithub],
  ]).get(iconName);

  return (
    <div className="profile-item">
      <Icon color="#2F5785" />
      <span>&nbsp;&nbsp;</span>
      {ProfileContent(type, desc)}
    </div>
  )
}

const Profile = ({
  name,
  avator
}: ThemeOptions['profile']) => {
  return (
    <div className="profile">
      <div className="profile-left">
        <div className="profile-name">{name}</div>
        <div className="profile-infos">
          <ProfileItem iconName="mobile" desc='(+86)130-5758-3790' />
          <ProfileItem iconName="email" desc='maoxiaoke@outlook.com' type="mail" />
          <ProfileItem iconName="github" desc='www.github.maoxiaoke' type="link" />
          <ProfileItem iconName="blog" desc='https://www.nazha.co' type='link' />
        </div>
      </div>
      <div className="profile-avatar">
        <img src={avator} alt="avatar" />
      </div>
    </div>
  )
}

export default Profile;

