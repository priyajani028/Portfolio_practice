import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'


const Footer = () =>{

    const icon = <FontAwesomeIcon icon={faGithub} />

    return (
        <div className="text-center border-t border-slate-300 p-4 text-slate-400">
            Designed and built by Priya
            <div>
                <Link href="https://github.com">
                <a  className="text-3xl text-slate-300">
                {icon}
                </a>             
                </Link>
            </div>
        </div>
    )
}
export default Footer;