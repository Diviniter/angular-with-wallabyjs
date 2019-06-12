import { IconUrlGeneratorService } from '@yuc/app/common/services/url-icon-generator.service';


describe('IconUrlGeneratorService', () => {
    let iconUrlGeneratorService: IconUrlGeneratorService;
    beforeEach(() => {
        iconUrlGeneratorService = new IconUrlGeneratorService();
    });

    it('should return es-banco-bankia.jpg for bank code 2038', () => {
        const imgSrc = iconUrlGeneratorService.getBankImageItem('2038');
        expect(imgSrc).toEqual('/assets/img/logos/es-banco-bankia.png');
    });

    it('should return icon-nothing for NO_BANK', () => {
        const imgSrc = iconUrlGeneratorService.getBankImageItem('NO_BANK');
        expect(imgSrc).toEqual('/assets/img/icons/icon-nothing.svg');
    });

    it('should return empty object for bank code null', () => {
        const response = iconUrlGeneratorService.getBankImageItem(null);
        expect(response).toEqual('');
    });

    it('should return empty object for bank code dummy', () => {
        const response = iconUrlGeneratorService.getBankImageItem('dummy');
        expect(response).toEqual('');
    });

    it('should return icon-celibataire for marital status SINGLE', () => {
        const response = iconUrlGeneratorService.getMaritalIconItem('SINGLE');
        expect(response.imgSrcOff).toEqual('/assets/img/icons/icon-celibataire.svg');
        expect(response.imgSrcOn).toEqual('/assets/img/icons/icon-celibataire-selected.svg');
    });

    it('should eturn empty object for marital status dummy', () => {
        const response = iconUrlGeneratorService.getMaritalIconItem('dummy');
        expect(response.imgSrcOff).toEqual('');
        expect(response.imgSrcOn).toEqual('');
    });

    it('should eturn empty object for marital status null', () => {
        const response = iconUrlGeneratorService.getMaritalIconItem(null);
        expect(response.imgSrcOff).toEqual('');
        expect(response.imgSrcOn).toEqual('');
    });
});
