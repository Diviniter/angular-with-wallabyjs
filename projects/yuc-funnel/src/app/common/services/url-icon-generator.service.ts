import { Injectable } from '@angular/core';

@Injectable()
export class IconUrlGeneratorService {

    private baseUrlIcons = '/assets/img/icons/';
    private baseUrlLogos = '/assets/img/logos/';

    private readonly maritalStatusIconDictionnary: {[key in string]: string} = {
        'SINGLE': 'icon-celibataire.svg',
        'MARRIED': 'icon-pacs.svg',
        'SEPARATED': 'icon-separe.svg',
        'DIVORCED': 'icon-divorce.svg',
        'COHABITING': 'icon-pacs.svg',
        'WIDOWED': 'icon-veuve.svg',
    };

    private readonly genderIconDictionnary: {[key in string]: string} = {
        'FEMALE': 'icon-woman.svg',
        'MALE': 'icon-man.svg',
        'MME': 'icon-woman.svg',
        'MLLE': 'icon-woman.svg',
        'M': 'icon-man.svg'
    };

    private readonly bankIconDictionnary: {[key in string]: string} = {

        /* spanish bank' */
        '2100': 'es-banco-caixabank.png',
        '0058': 'es-banco-bnp-paribas-espana.png',
        '0075': 'es-banco-popular-espanol.png',
        '0081': 'es-banco-sabadell.png',
        '0162': 'es-banco-ing.png',
        '0182': 'es-banco-bbva.png',
        '2013': 'es-banco-catalunya.png',
        '2038': 'es-banco-bankia.png',
        '2085': 'es-banco-ibercaja.png',
        '2095': 'es-banco-kutxabank.png',
        '0049': 'es-banco-santander.png',
        '0128': 'es-banco-bankinter.png',

        /* italian bank' */
        '3223': 'it-banca-unicredit.jpg',
        '1030': 'it-banca-monte-dei-paschi-di-siena.jpg',
        '3069': 'it-banca-intesa-sanpaolo.png',
        '7601': 'it-banca-posta.png',
        '5034': 'it-banca-popolare.png',
        '1005': 'it-banca-nazionale-del-lavoro.png',
        '5387': 'it-banca-bper.png',
        '3062': 'it-banca-mediolanum.png',
        '3015': 'it-banca-fineco.png',
        '3475': 'it-banca-ing.png',

        /* French bank' */
        'BANQUE_POPULAIRE': 'fr-banque-banque_populaire.png',
        'BANQUE_POSTALE': 'fr-banque-banque_postale.png',
        'BNP_PARIBAS': 'fr-banque-bnp_paribas.png',
        'BOURSORAMA': 'fr-banque-boursorama.png',
        'CAISSE_D_EPARGNE': 'fr-banque-caisse_d_epargne.png',
        'CIC': 'fr-banque-cic.png',
        'CREDIT_AGRICOLE': 'fr-banque-credit_agricole.png',
        'CREDIT_LYONNAIS': 'fr-banque-credit_lyonnais.png',
        'CREDIT_MUTUEL': 'fr-banque-credit_mutuel.png',
        'FORTUNEO': 'fr-banque-fortuneo.png',
        'HSBC': 'fr-banque-hsbc.png',
        'SOCIETE_GENERALE': 'fr-banque-societe_generale.png',
        'SELECT_VALUE_FROM_OTHER_BANK': 'icon-others.svg',

        /* portuguese bank' */
        '0035': 'pt-banco-cgd.png',
        '0018': 'pt-banco-santander.png',
        '0033': 'pt-banco-millennium.png',
        '0010': 'pt-banco-bpi.png',
        '0007': 'pt-banco-novobanco.png',
        '0036': 'pt-banco-montepio.png',
        '0098': 'pt-banco-creditoagricola.png',

        /* Other bank' */
        'NO_BANK': 'icon-nothing.svg',
        'OTHER': 'icon-others.svg',
    };

    private readonly flagIconDictionary: {[key in string]: string} = {
        'FR': 'fr-flag.png',
        'EUR': 'eur-flag.png',
        'OTHER': 'icon-others.svg',
    };

    getMaritalIconItem(item: string): { imgSrcOff: string, imgSrcOn: string } {
        if (item in this.maritalStatusIconDictionnary) {
            const ressourceImg = this.maritalStatusIconDictionnary[item];
            return {
                imgSrcOff: this.getUrlIconOff(ressourceImg),
                imgSrcOn: this.getUrlIconOn(ressourceImg)
            };
        }
        return { imgSrcOff: '', imgSrcOn: '' };
    }

    getGenderIconItem(item: string): { imgSrcOff: string, imgSrcOn: string } {
        if (item in this.genderIconDictionnary) {
            const ressourceImg = this.genderIconDictionnary[item];
            return {
                imgSrcOff: this.getUrlIconOff(ressourceImg),
                imgSrcOn: this.getUrlIconOn(ressourceImg)
            };
        }
        return { imgSrcOff: '', imgSrcOn: '' };
    }

    getBankImageItem(item: string): string {
        return this.getImage(() => this.bankIconDictionnary[item]);
    }

    getFlagImageItem(item: string): string {
        return this.getImage(() => this.flagIconDictionary[item]);
    }

    private getImage(imageProvider: () => string): string {
        const image =  imageProvider();
        if (image) {
            const baseUrl = this.getBaseUrl(image);
            return baseUrl + image;
        }
        return '';
    }

    private getUrlIconOn(ressourceImg: string): string {
        const baseUrl = this.getBaseUrl(ressourceImg);
        return baseUrl + this.getIconOnName(ressourceImg);
    }

    private getUrlIconOff(ressourceImg: string): string {
        const baseUrl = this.getBaseUrl(ressourceImg);
        return baseUrl + ressourceImg;
    }

    private getIconOnName(ressourceImg: string): string {
        const ext = this.getExtension(ressourceImg);
        const urlBase = ressourceImg.substring(0, ressourceImg.indexOf('.'));
        return urlBase + '-selected.' + ext;
    }

    private getBaseUrl(ressourceImg: string): string {
        const ext = this.getExtension(ressourceImg);
        if (ext.indexOf('png') >= 0 || ext.indexOf('jpg') >= 0) {
            return this.baseUrlLogos;
        }
        return this.baseUrlIcons;
    }

    private getExtension(ressourceImg: string): string {
        return ressourceImg.substr(ressourceImg.lastIndexOf('.') + 1);
    }
}